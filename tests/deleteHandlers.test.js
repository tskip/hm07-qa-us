// eslint-disable-next-line no-undef
const { response } = require('carthage/core/required/api');
const config = require('../config');
let actualStatus;

test('With a valid URL status should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});

	//get status code
	actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}

	//print status code
	//console.log(actualStatus);
	
	//check status code
	expect(actualStatus).toBe(200);
});

test('With a invalid URL status should be 404', async () => {
    try {
		const response = await fetch(`${config.INVALID_API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});

	//get status code
	actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}

	//print status code
	//console.log(actualStatus);
	
	//check status code
	expect(actualStatus).toBe(404);
});

test('Status should be 500 if kit id is a string', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/one`, {
			method: 'DELETE',
		});

	//get status code
	actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}

	//print status code
	//console.log(actualStatus);
	
	//check status code
	expect(actualStatus).toBe(500);
});
