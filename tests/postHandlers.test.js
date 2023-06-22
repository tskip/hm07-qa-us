// eslint-disable-next-line no-undef
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

	//test print the status code
	//console.log(actualStatus);

	//check status code
	expect(actualStatus).toBe(504);
	

});

const invalidRequestBody2 = {"products":[
    {
		"id": 0,
		"quantity": "one"
	},
	{
		"id": 4,
		"quantity": 5
	}
]}

test('With a string in the quantity field the status should be 504', async () => {
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

	//test print the status code
	//console.log(actualStatus);

	//check status code
	expect(actualStatus).toBe(504);
	

});


