const Router = require('express')
const Producto = require("../models/productos")

const routerProductos = Router();

routerProductos.get('/', async (req,res) => {
    const productos = await Producto.findAll({})
    res.status(200)
    res.json(productos)
})

module.exports = routerProductos