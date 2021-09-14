import { Test } from "../../service/index"

const state = {
	list:[]
};

const mutations = {
	setList(state, data) {
		state.list = data;
	}
};

const actions = {

	// 测试用例
	async Test({ commit }) {
		const [err, res] = await Test();
		if (err) {

			return false;
		}
		const { data = {} } = res || {};

		// window.$cookies.set('TOKEN_STORAGE_KEY', 'tokenTest', '1d'); 设置token

		// window.$cookies.get('TOKEN_STORAGE_KEY'); 获取token

		commit("setList", data.msg)

	},

};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};

