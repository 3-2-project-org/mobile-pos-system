const request = require('supertest');
const app = require('../your-express-app');
const axiosInstance = require('../../utils/common/api');

describe('Sales API Tests', () => {
  it('should get sales data', async () => {
    const response = await request(app).get('/sales'); 

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('should create a new sale', async () => {
    const newSaleData = {
     
    };

    const response = await request(app)
      .post('/sales') 
      .send(newSaleData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('data');

   
    const createdSale = response.body.data;
    const saleId = createdSale._id; 

    const getSaleResponse = await axiosInstance.get(`/sales/${saleId}`);

    expect(getSaleResponse.status).toBe(200);
    expect(getSaleResponse.data).toHaveProperty('data');
    expect(getSaleResponse.data.data._id).toBe(saleId);
  });
});
