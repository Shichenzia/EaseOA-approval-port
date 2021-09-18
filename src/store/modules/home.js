import { addTemplate } from "../../service/form";

const state = {
  headTab: "1"
};

const mutations = {
  setHeadTab(state, val){
    state.headTab = val;
  }
};

const actions = {
  async addTemplate({commit}, params){
    const [err] = await addTemplate({data:{...params}});

    console.log(commit);
    if(err) {
      return false;
    }
    return true;
  }
 
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
