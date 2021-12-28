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

// 根据姓名 获取用户列表
export async function getUserListByName(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/get_user_list_by_name`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 获取组织树形结构
export async function getAllGroupList(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/get_all_group_list`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 获取某部门下所有一级部门列表
export async function getGroupListByGid(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/get_group_list_by_gid`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 创建组织
export async function createGroup(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/create_group`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}



// 删除组织
export async function deleteGroup(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/delete_group`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 
export async function updateGroup(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/update_group`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}


// 
export async function createMember(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/create_member`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 
export async function listMember(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/list_member`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 
export async function listMemberByGid(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/list_member_by_gid`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 
export async function updateMember(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/update_member`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 
export async function deleteMember(config) {
	return await post(config, `${TEAM_REQUEST_PORT}/delete_member`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}