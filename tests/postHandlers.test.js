// eslint-disable-next-line no-undef
const { my } = require('carthage');
const { response } = require('carthage/core/required/api');
const config = require('../config');
let actualStatus;

const requestBody = {"products":[
    {
		"id": 5,
		"quantity": 1
	},
	{
		"id": 4,
		"quantity": 5
	}
]
}

const invalidRequestBody = {"products":[
    {
		"id": "zero",
		"quantity": 1
	},
	{
		"id": 4,
		"quantity": 5
	}
]}

const requestBody2 = {
	"productsList": [
	{
		"id": 5,
		"quantity": 2
	}
	]
}

test('status should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		//get status code
		actualStatus=response.status;

	} catch (error) {
		console.error(error);
	}

	//check status code
	expect(actualStatus).toBe(200);

});

test('status should be 404 when using an invalid API URL', async () => {
    try {
		const response = await fetch(`${config.INVALID_API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		//get status code
		actualStatus=response.status;

	} catch (error) {
		console.error(error);
	}

	//check status code
	expect(actualStatus).toBe(404);

});

test('With a string in the id field the status should be 504', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(invalidRequestBody)
		});

		//get status code
		actualStatus=response.status;

	} catch (error) {
		console.error(error);
	}

	//check status code
	expect(actualStatus).toBe(504);
	
});

test('Status code should be 201', async () => {
	let actualStatusCode;
	try{
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(requestBody2)
		});

		//get status code
		actualStatusCode = response.status;

	}catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(201);
});

test('Resposne body should contain....', async () => {
    let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody2)
		});

		//extract response body
		actualResponseBody = await response.json();

	} catch (error) {
		console.error(error);
	}

	//check for specific courier service
	expect(actualResponseBody.courierService).toBe("Order and Go");
	//Just adding a test change to show a student how to properly push changes
});

