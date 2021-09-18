import { post } from './common';

// 测试样例
export async function addTemplate(config) {
	return await post(config, '/add_template')
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

