import { post } from './common';
import { WORKFLOW_REQUEST_PORT } from "../common/constants";
// 
export async function getAllClass(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/get_all_class`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

export async function addClass(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/add_class`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

export async function setClassById(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/set_class_by_id`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

export async function delClassById(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/del_class_by_id`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

export async function getAllProcess(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/get_all_process`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

export async function getProcessById(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/get_process_by_id`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

export async function issueProcess(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/issue_process`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

export async function setProcessById(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/set_process_by_id`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

export async function delProcessById(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/del_process_by_id`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}