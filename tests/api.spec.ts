import {test, expect} from '@playwright/test';

test('API Test: GET /products', async ({ request }) => {
  const apiUrl = 'https://api.practicesoftwaretesting.com';
  const response = await request.get(`${apiUrl}/products`);
  expect(response.status()).toBe(200);
  const body  = await response.json(); 
  //console.log(body);
  expect(body.data.length).toBe(9)
  expect(body.total).toBe(50);

  // expect(body).toHaveProperty('products');
  // expect(body.products).toBeInstanceOf(Array);
  // expect(body.products.length).toBeGreaterThan(0);
  // Uncomment the following line if you want to log the response body
  // console.log(body);
  // Uncomment the following line if you want to check the structure of the response
  // expect(body.products[0]).toHaveProperty('id');
  // expect(body.products[0]).toHaveProperty('name');
  // Uncomment the following line if you want to check the first product's name
  // expect(body.products[0].name).toBe('Product Name'); // Replace with an actual product name if known
 // expect(await response.json()).toEqual({data: 'some data'});
});

test("API Test: POST /users/login", async ({ request }) => {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response = await request.post(`${apiUrl}/users/login`, {
    data: {
      email: "customer@practicesoftwaretesting.com",
      password: "welcome01"
    }
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
   console.log(body);
   expect(body.access_token).toBeDefined(); // Check if access_token is defined meaning it exists in the response 
   expect(body.access_token).toBeTruthy(); // Check if access_token is defined and truthy meaning not null or empty

   // Additional assertions can be added here
});