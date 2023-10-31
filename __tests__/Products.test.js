const request = require('supertest');
const app = require('../your-express-app'); 
const axiosInstance = require('../../utils/common/api');

describe('Inventory Summary Screen API Tests', () => {
  it('should get product details', async () => {
    const response = await request(app).get('/product?limit=100');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('data');
  });

  it('should update product stock', async () => {
    
    const productId = 'your-product-id';
    const newStockValue = 100; 

   
    const response = await request(app)
      .patch(`/product/${productId}`)
      .send({ totalStock: newStockValue });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');

   
    const getProductResponse = await axiosInstance.get(`/product/${productId}`);

    expect(getProductResponse.status).toBe(200);
    expect(getProductResponse.data).toHaveProperty('data');
    expect(getProductResponse.data.data.totalStock).toBe(newStockValue);
  });
});
