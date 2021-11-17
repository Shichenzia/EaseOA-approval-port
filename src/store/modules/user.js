import { getUserByToken, setUserInfo } from '../../service/user';

const state = {
  userInfo: {}
};

const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
  }
};

const actions = {
    // 
    async getUserByToken({ commit }, params) {
      const [err, res] = await getUserByToken({
        data: {
          ...params,
        },
      });
  
      if (err) {
        window.$message({
          showClose: true,
          message: "获取用户出现错误！",
          type: "error",
        });
        return false;
      }
  
      const { data } = res;
      commit("setUserInfo", data[0]);
  
      return true;
    },

     // 根据Id获取审批模板信息
     async setUserInfo({ dispatch }, params) {
      const [err] = await setUserInfo({
        data: {
          ...params,
        },
      });
  
      if (err) {
        window.$message({
          showClose: true,
          message: "失败",
          type: "error",
        });
        return false;
      }
  
      dispatch("getUserByToken");
      return true;
    },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
