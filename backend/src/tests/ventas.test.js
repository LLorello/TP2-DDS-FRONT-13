const request = require('supertest');
const app = require('../index');

describe('GET /api/ventas/:id ', () => {
    it('Deberia devolver StatusCode 200', async () =>{

    const id = 2

    const res = await request(app)
    .get(`/api/ventas/${id}`)
    .set('Accept', 'application/json');

    expect(res.statusCode).toEqual(200);

    expect(res.headers["content-type"]).toEqual("application/json; charset=utf-8" );
    expect(res.body).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            fechaVenta: expect.any(String), //la validacion con any(Date) nos da error, por eso dejamos string
            tipoFactura: expect.any(String)
        })
      );
    })
});