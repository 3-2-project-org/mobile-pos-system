const request = require('supertest');
const app = require('../your-express-app'); // Import your Express app here
const axiosInstance = require('../../utils/common/api'); // Import your axios instance

describe('Inventory Summary Screen API Tests', () => {
  it('should get product details', async () => {
    const response = await request(app).get('/product?limit=100');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('data');
  });

  it('should update product stock', async () => {
    // Assuming you have a product ID, and you want to update the stock
    const productId = 'your-product-id';
    const newStockValue = 100; // Replace with the desired new stock value

    // Make the PATCH request to update the product stock
    const response = await request(app)
      .patch(`/product/${productId}`)
      .send({ totalStock: newStockValue });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');

    // After updating the product stock, you can also fetch the product details and check if the stock is updated.
    const getProductResponse = await axiosInstance.get(`/product/${productId}`);

    expect(getProductResponse.status).toBe(200);
    expect(getProductResponse.data).toHaveProperty('data');
    expect(getProductResponse.data.data.totalStock).toBe(newStockValue);
  });
});
