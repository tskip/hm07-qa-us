// eslint-disable-next-line no-undef
const config = require('../config');
let actualStatus;

test('status should be 200', async () => {
	try {
		//make request
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		//extract response code
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}

	//check status code
	expect(actualStatus).toBe(200);
});

test('status should be 404 when using an invalid API URL', async () => {
	try {
		//make request
		const response = await fetch(`${config.INVALID_API_URL}/api/v1/warehouses`);
		//extract response code
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}

	//print status code
	//console.log(actualStatus);

	//check status code
	expect(actualStatus).toBe(404);
});