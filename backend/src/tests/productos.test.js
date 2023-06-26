const request = require('supertest');
const app = require("../index")

describe('GET productos', () => {
    it('recibe status code 200', async ()=>{
      const res = await request(app).get('/api/productos')
      console.log(res.statusCode)
      expect(res.statusCode).toEqual(200);
    })
  });
