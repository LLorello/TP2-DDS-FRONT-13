const request = require('supertest');
const app = require('../index');

describe('PUT /api/clientes', () => {
    it('Debería devolver cod 200 y el objeto actualizado', async () => {
       
      const datosAEnviar = {
        //Busca por dni
        dni: 52741634,
        //Datos que actualiza
        nombre: 'Pepe',
        fecha_compra: '2021-02-18'
      };

      const res = await request(app)
        .put(`/api/clientes/actualizar`)
        .set('Accept', 'application/json')
        .send(datosAEnviar); //Envia los datos para que actualice
  
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(
        expect.objectContaining({
          dni: datosAEnviar.dni,
          nombre: datosAEnviar.nombre,
          fecha_compra: datosAEnviar.fecha_compra
        })
      );
    });
  });