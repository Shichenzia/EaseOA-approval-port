import {
  createGroup,
  createMember,
  deleteGroup,
  deleteMember,
  getAllGroupList,
  getGroupListByGid,
  getUserByToken,
  getUserListByName,
  listMember,
  listMemberByGid,
  setUserInfo,
  updateGroup,
  updateMember,
} from "../../service/user";

const state = {
  userInfo: {},
  groupTree: {
    c_id: "0001",
    c_name: "EaseOA",
    c_gid: "0001000",
    children: [
      {
        c_id: "0002",
        c_name: "Ease02",
        c_gid: "0001",
      },
    ],
  },
  userList: [],
  memberList: [],
};

const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
  },

  setGroupTree(state, data) {
    state.groupTree = data;
  },

  setUserList(state, data) {
    state.userList = data;
  },

  setMemberList(state, data) {
    let dataInfo = {};
    data.forEach((item) => {
      const { c_name } = item;
      if (!dataInfo[c_name]) {
        dataInfo[c_name] = {
          ...item,
          groups: [],
        };
      }

      dataInfo[c_name].groups.push(item);
    });
    state.memberList = Object.values(dataInfo);
  },
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

  //
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

  //
  async getUserListByName({ commit }, params) {
    const [err, res] = await getUserListByName({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取用户列表错误！",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setUserList", data);

    return true;
  },

  //
  async getAllGroupList({ commit }, params) {
    const [err, res] = await getAllGroupList({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取组织树错误！",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setGroupTree", data);

    return true;
  },

  //
  async getGroupListByGid({ commit }, params) {
    const [err, res] = await getGroupListByGid({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取过程出现错误！",
        type: "error",
      });
      console.log(commit);
      return false;
    }

    const { data } = res;
    return data;
  },

  //
  async createGroup({ dispatch }, params) {
    const [err] = await createGroup({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "创建失败",
        type: "error",
      });
      return false;
    }
    window.$message({
      showClose: true,
      message: "创建成功",
      type: "success",
    });
    await dispatch("getAllGroupList");
    return true;
  },

  //
  async deleteGroup({ dispatch }, params) {
    const [err] = await deleteGroup({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "删除失败",
        type: "error",
      });
      return false;
    }
    window.$message({
      showClose: true,
      message: "删除成功",
      type: "success",
    });
    await dispatch("getAllGroupList");
    return true;
  },

  //
  async updateGroup({ dispatch }, params) {
    const [err] = await updateGroup({
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

    dispatch("getAllGroupList");
    return true;
  },

  //
  async createMember({ dispatch }, params) {
    const [err] = await createMember({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "创建失败",
        type: "error",
      });
      return false;
    }
    window.$message({
      showClose: true,
      message: "创建成功",
      type: "success",
    });
    await dispatch("listMember");
    return true;
  },

  //
  async listMember({ commit }, params) {
    const [err, res] = await listMember({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取组织树错误！",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setMemberList", data);

    return true;
  },

  // 获取某个部门下的成员列表
  async listMemberByGid({ commit }, params) {
    const [err, res] = await listMemberByGid({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取组织错误！",
        type: "error",
      });
      console.log(commit);
      return false;
    }

    const { data } = res;

    return data;
  },

  //
  async updateMember({ dispatch }, params) {
    const [err] = await updateMember({
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

    dispatch("listMember");
    return true;
  },

  // 删除
  async deleteMember({ dispatch }, params) {
    const [err] = await deleteMember({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "删除失败",
        type: "error",
      });
      return false;
    }
    window.$message({
      showClose: true,
      message: "删除成功",
      type: "success",
    });
    await dispatch("listMember");
    return true;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
