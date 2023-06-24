// eslint-disable-next-line no-undef
const { response } = require('carthage/core/required/api');
const config = require('../config');


test('With a valid URL status should be 200', async () => {
    let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});

	//get status code
	actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}

	//check status code
	expect(actualStatus).toBe(200);
});

test('With a invalid URL status should be 404', async () => {
    let actualStatus;
	try {
		const response = await fetch(`${config.INVALID_API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});

	//get status code
	actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}

	//check status code
	expect(actualStatus).toBe(404);
});

test('Status should be 500 if kit id is a string', async () => {
    let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/one`, {
			method: 'DELETE',
		});

	//get status code
	actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}
	
	//check status code
	expect(actualStatus).toBe(500);
});

test('Deleting a cart that does not exist should return 404', async () => {
    let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/2`, {
			method: 'DELETE',
		});

	//get status code
	actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}
	
	//check status code
	expect(actualStatus).toBe(404);
});

test('Deleting a kit that exist should return 200', async () => {
    let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});

	//get status code
	actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}
	
	//check status code
	expect(actualStatus).toBe(200);
});

test('Body should contain TRUE boolean when kit is successfully deleted', async () => {
    let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});

	//extract response body
	actualResponseBody = await response.json();

	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody.ok).toBeTruthy();

});

