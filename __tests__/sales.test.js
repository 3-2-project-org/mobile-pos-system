const request = require('supertest');
const app = require('../your-express-app'); // Import your Express app here
const axiosInstance = require('../../utils/common/api'); // Import your axios instance

describe('Sales API Tests', () => {
  it('should get sales data', async () => {
    const response = await request(app).get('/sales'); // Replace with your actual endpoint

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('should create a new sale', async () => {
    const newSaleData = {
      // Replace with your new sale data, e.g., product ID, quantity, customer info, etc.
    };

    const response = await request(app)
      .post('/sales') // Replace with your actual endpoint for creating sales
      .send(newSaleData);

    expect(response.status).toBe(201); // Assuming 201 indicates a successful creation
    expect(response.body).toHaveProperty('data');

    // After creating a sale, you can also fetch the sale details and verify if it exists in your database.
    const createdSale = response.body.data;
    const saleId = createdSale._id; // Assuming the response contains the ID of the created sale

    const getSaleResponse = await axiosInstance.get(`/sales/${saleId}`);

    expect(getSaleResponse.status).toBe(200);
    expect(getSaleResponse.data).toHaveProperty('data');
    expect(getSaleResponse.data.data._id).toBe(saleId);
  });
});
