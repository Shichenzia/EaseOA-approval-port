import {
  addClass,
  getAllClass,
  issueProcess,
  getAllProcess,
  setClassById,
  delClassById,
  getProcessById,
  setProcessById,
  delProcessById
} from "../../service/approval";

const state = {
  classList: [],
  approvalAllList: [],
  approverIcon:
    "http://or-chengdu.oss-cn-chengdu.aliyuncs.com/000c9e95ed0200000005/e20d072e4d2ade509dfe0d3ffa30f0f4.png",
  approvalName: "",
  approvalDesc: "",
  classify: "",
  starter: "",
  FcDesignerRuleJson: `[]`,
  FcDesignerOptionsJson: `{"form":{"labelPosition":"right","size":"mini","labelWidth":"125px","hideRequiredAsterisk":false,"showMessage":true,"inlineMessage":false}}`,
  commitJson: null,
  processConfigJson: `{"tableId":1,"workFlowDef":{"name":"合同审批"},"directorMaxLevel":4,"flowPermission":[],"nodeConfig":{"nodeName":"发起人","type":0,"priorityLevel":"","settype":"","selectMode":"","selectRange":"","directorLevel":"","examineMode":"","noHanderAction":"","examineEndDirectorLevel":"","ccSelfSelectFlag":"","conditionList":[],"nodeUserList":[],"childNode":null,"conditionNodes":[]}}`,
  commitProcessConfigJson: "",
};

const mutations = {
  setClassList(state, data) {
    state.classList = data;
  },

  setApprovalAllList(state, data) {
    state.approvalAllList = data;
    if (state.classList.length === 0 || data.length === 0 || !data) {
      state.approvalAllList = [];
      return;
    }

    // 还能说啥捏， 魔法呗
    const arr = state.classList.map((item) => {
      item["approvalList"] = [];
      return item;
    });

    state.classList.map((citem, cindex) => {
      data.map((aitem) => {
        if (citem.c_id === aitem.c_class_id) {
          arr[cindex].approvalList.push(aitem);
        }
      });
    });
    state.approvalAllList = arr;
  },

  setBaseInfo(state, { property, data }) {
    state[property] = data;
  },

  setApprovalInfo(state, data) {
    if (!data) {
      return;
    }

    const {
      FcDesignerRuleJson,
      FcDesignerOptionsJson,
      processConfigJson,
    } = data;
    state.approvalName = data.c_title;
    state.approverIcon = data.c_process_icon;
    state.approvalDesc = data.c_desc;
    state.classify = data.c_class_id;
    state.FcDesignerRuleJson = FcDesignerRuleJson;
    state.FcDesignerOptionsJson = FcDesignerOptionsJson;
    state.processConfigJson = processConfigJson;
  },

  setAllBaseInfoInit(state) {
    state.approverIcon= "http://or-chengdu.oss-cn-chengdu.aliyuncs.com/000c9e95ed0200000005/e20d072e4d2ade509dfe0d3ffa30f0f4.png";
    state.approvalName = "";
    state.approvalDesc = "";
    state.classify = "";
    state.starter = "";
    state.FcDesignerOptionsJson = `{"form":{"labelPosition":"right","size":"mini","labelWidth":"125px","hideRequiredAsterisk":false,"showMessage":true,"inlineMessage":false}}`;
    state.FcDesignerRuleJson = `[]`;
    state.processConfigJson = `{"tableId":1,"workFlowDef":{"name":"合同审批"},"directorMaxLevel":4,"flowPermission":[],"nodeConfig":{"nodeName":"发起人","type":0,"priorityLevel":"","settype":"","selectMode":"","selectRange":"","directorLevel":"","examineMode":"","noHanderAction":"","examineEndDirectorLevel":"","ccSelfSelectFlag":"","conditionList":[],"nodeUserList":[],"childNode":null,"conditionNodes":[]}}`;
  }
};

const actions = {
  // 获取当前所有分组
  async getAllClass({ commit }) {
    const [err, res] = await getAllClass({
      data: {},
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取类型列表错误",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setClassList", data);

    return true;
  },

  // 添加分组
  async addClass({ dispatch }, params) {
    const [err] = await addClass({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "添加失败",
        type: "error",
      });
      return false;
    }
    window.$message({
      showClose: true,
      message: "添加成功",
      type: "success",
    });
    await dispatch("getAllClass");
    await dispatch("getAllProcess");
    return true;
  },

  // 修改分组信息
  async setClassById({ dispatch }, params) {
    const [err] = await setClassById({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "修改失败",
        type: "error",
      });
      return false;
    }
    window.$message({
      showClose: true,
      message: "修改成功",
      type: "success",
    });
    await dispatch("getAllClass");
    await dispatch("getAllProcess");
    return true;
  },

  // 删除分组信息
  async delClassById({ dispatch }, params) {
    const [err] = await delClassById({
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
    await dispatch("getAllClass");
    await dispatch("getAllProcess");
    return true;
  },

  // 获取当前所有审批模板
  async getAllProcess({ commit }) {
    const [err, res] = await getAllProcess({
      data: {},
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取列表错误",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setApprovalAllList", data);

    return true;
  },

  // 根据Id获取审批模板信息
  async getProcessById({ commit }, params) {
    const [err, res] = await getProcessById({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "获取流程信息出现错误！",
        type: "error",
      });
      return false;
    }

    const { data } = res;
    commit("setApprovalInfo", data);

    return true;
  },

  // 提交流程模板
  async issueProcess({ commit }, params) {
    const [err] = await issueProcess({
      data: {
        ...params,
      },
    });

    if (err) {
      window.$message({
        showClose: true,
        message: "添加失败",
        type: "error",
      });
      return false;
    }
    window.$message({
      showClose: true,
      message: "添加成功",
      type: "success",
    });
    console.log(commit);
    return true;
  },

  // 修改流程信息
  async setProcessById({commit}, params) {
    const [err, res] = await setProcessById({
      data: {
        ...params,
      },
    });

    if (err || !res.data) {
      window.$message({
        showClose: true,
        message: "修改失败",
        type: "error",
      });
      return false;
    }
    window.$message({
      showClose: true,
      message: "修改成功",
      type: "success",
    });
    console.log(commit);
    return true;
  },

  // 删除流程信息
  async delProcessById({ dispatch }, params) {
    const [err] = await delProcessById({
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
    await dispatch("getAllClass");
    await dispatch("getAllProcess");
    return true;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
