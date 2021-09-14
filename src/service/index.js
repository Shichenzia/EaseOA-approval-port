import { post } from './common';

// 测试样例
export async function Test(config) {
	return await post(config, '/test')
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

