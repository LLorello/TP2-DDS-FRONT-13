const app = require("../index");
const request = require("supertest");


describe('POST /api/proveedores', () => {
    it('Debería crear un nuevo proveedor', async () => {
      const proveedor = {
        nombre: 'Agustin',
        direccion: 'Cruz Roja',
        categoria: 'A',
        fechaIngreso: "2000-03-22T00:00:00.000Z"
      };
  
      const response = await request(app)
        .post('/api/proveedores')
        .send(proveedor);
  
      expect(response.status).toEqual(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toEqual(
        expect.objectContaining({
            nombre: proveedor.nombre,
            direccion: proveedor.direccion,
            categoria: proveedor.categoria,
            fechaIngreso: proveedor.fechaIngreso,
        })
      );
    });
  
    it('Debería retornar un error al crear un proveedor sin datos', async () => {
      const response = await request(app)
        .post('/api/proveedores')
        .send({});
  
      expect(response.status).toEqual(500);
      expect(response.body.error).toEqual('Error al crear el proveedor');
    });
  });