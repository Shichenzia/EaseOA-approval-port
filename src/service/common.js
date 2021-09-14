import request from '../common/request';

export async function post(config, operate) {
	return await request({
		...config,
		operate
	});
}
