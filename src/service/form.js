import { post } from './common';

// 
export async function addTemplate(config) {
	return await post(config, '/add_template')
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

