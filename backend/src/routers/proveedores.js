const Router = require('express')
const Proveedores = require("../models/proveedores");

const routerProveedores = Router();

routerProveedores.post('/', async (req,res)=>{
    try {
        const data = req.body;
        const proveedor = await Proveedores.create(data);
        res.status(201).json(proveedor)
      } catch (error) {
        res.status(500).json({ error: 'Error al crear el proveedor' });
      }
});

routerProveedores.delete('/:nombre', async (req,res)=>{
    try{
      const nombre = req.params.nombre
      await Proveedores.destroy({ where: {nombre}})
      res.status(200)
    } catch (e) {
      res.status(500).json({error: 'Error al eliminar el proveedor'})
    }
});

routerProveedores.put('/:id/:nombre', async (req,res)=>{
  try{
    const {id, nombre} = req.params
    const data = req.body
    const proveedores = await Proveedores.update(data, {where: {id, nombre}})
    res.status(200).json(proveedores)
  } catch (e) {
    res.status(500).json({error: 'Error al actualizar el proveedor'})
  }
});

routerProveedores.get('/', async (req,res)=>{
  try{
    const proveedores = await Proveedores.findAll({})
    res.status(200).json(proveedores)
  } catch (error){
    res.status(500).json({ error: 'Error al consultar los proveedores' })
  }
});

module.exports = routerProveedores