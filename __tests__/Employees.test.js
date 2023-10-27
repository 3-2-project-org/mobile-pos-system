const request = require('supertest');
const app = require('../your-express-app'); // Import your Express app here
const axiosInstance = require('../../utils/common/api'); // Import your axios instance

describe('Employees API Tests', () => {
  it('should get employee data', async () => {
    const response = await request(app).get('/employees'); // Replace with your actual endpoint

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('should create a new employee', async () => {
    const newEmployeeData = {
      // Replace with your new employee data, e.g., name, position, contact info, etc.
    };

    const response = await request(app)
      .post('/employees') // Replace with your actual endpoint for creating employees
      .send(newEmployeeData);

    expect(response.status).toBe(201); // Assuming 201 indicates a successful creation
    expect(response.body).toHaveProperty('data');

    // After creating an employee, you can also fetch the employee details and verify if it exists in your database.
    const createdEmployee = response.body.data;
    const employeeId = createdEmployee._id; // Assuming the response contains the ID of the created employee

    const getEmployeeResponse = await axiosInstance.get(`/employees/${employeeId}`);

    expect(getEmployeeResponse.status).toBe(200);
    expect(getEmployeeResponse.data).toHaveProperty('data');
    expect(getEmployeeResponse.data.data._id).toBe(employeeId);
  });
});
