// eslint-disable-next-line no-undef
const config = require('../config');
let actualStatus;

const requestBody = {
	"name": "Sprint 7 Project",
	"productsList": [
		{
			"id": 1,
			"quantity": 4
		},
		{
			"id": 5,
			"quantity": 2
		}
	]
}

const invalidRequestBody2 = {
	"productsList": [
	{
		"id": 1,
		"quantity": "four"
	},
	{
		"id": 5,
		"quantity": 2
	},
],"name": "Sprint 7 Project"
}

test('With a valid URL status should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		//get status code
		actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}

	//test print the status code
	//console.log(actualStatus);

	//check status code
	expect(actualStatus).toBe(200);

});

test('status should be 404 when using an invalid API URL', async () => {
    try {
		const response = await fetch(`${config.INVALID_API_URL}/api/v1/kits/3`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		//get status code
		actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}

	//test print the status code
	//console.log(actualStatus);

	//check status code
	expect(actualStatus).toBe(404);

});

test('status should be 500 when quantity field contains a string', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(invalidRequestBody2)
		});

		//get status code
		actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}

	//test print the status code
	//console.log(actualStatus);

	//check status code
	expect(actualStatus).toBe(500);

});