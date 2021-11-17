import { post } from './common';
import { TEAM_REQUEST_PORT } from "../common/constants";

// 根据token获取用户信息
export async function getUserByToken(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/get_user_by_token`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 根据token设置用户信息
export async function setUserInfo(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/set_user_info`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

