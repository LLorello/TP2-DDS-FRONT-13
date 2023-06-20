const Router = require('express')
const Proveedores = require("../models/proveedores")

const routerProveedores = Router();

routerProveedores.post('/', async (req,res)=>{
    try {
        const data = req.body;
        const proveedor = await Proveedores.create(data);
        res.status(201).json(proveedor);
        
      } catch (error) {
        res.status(500).json({ error: 'Error al crear el proveedor' });
      }
});

module.exports = routerProveedores