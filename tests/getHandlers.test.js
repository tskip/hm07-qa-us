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

	//check status code
	expect(actualStatus).toBe(404);
});

test('Body should contain.....', async () => {
	let actualResponseBody;
	try {
		//make request
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		//extract body
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	//check body
	expect(actualResponseBody.name).toBe("For picnic");

});

