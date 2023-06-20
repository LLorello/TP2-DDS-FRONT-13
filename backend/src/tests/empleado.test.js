const request = require('supertest');
const app = require('../index');


describe('DELETE empleados/:legajo', () => {
    it('Recibe statusCode 200', async ()=>{
        const legajoAEliminar = 4

        const res = await request(app).delete(`/api/empleados/${legajoAEliminar}`)
        expect(res.statusCode).toEqual(200);
    })
  });