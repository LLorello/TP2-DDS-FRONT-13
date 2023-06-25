const Router = require('express')
const Producto = require('../models/productos')
const { getProductsByFilter, getProductsById, getAllProductsByFilter } = require('../services/productos.service');

const routerProductos = Router();

routerProductos.get('/', async (req,res) => {
    const productos = await getProductsByFilter()
    res.status(200)
    res.json(productos)
})

routerProductos.get('/all/', async (req,res) => {
    const productos = await getAllProductsByFilter()
    res.status(200)
    res.json(productos)
})

routerProductos.get('/:filtro', async (req,res) => {
    const productos = await getProductsByFilter(req.params.filtro)
    res.status(200)
    res.json(productos)
})

routerProductos.put('/', async (req,res) => {

    const { id, nombre, precio, vencimiento } = req.body
    const producto = await getProductsById(id)

    console.log(producto)

    if(nombre){ producto.nombre = nombre }
    if(precio){ producto.precio = precio }
    if(vencimiento){producto.vencimiento = vencimiento }
    producto.save()

    res.status(200)
    res.json(producto)
})

routerProductos.post('/', async (req,res) => {

    const { nombre, precio, vencimiento } = req.body

    const producto = {}
    producto.nombre = nombre
    producto.eliminado = 0
    producto.precio = precio
    producto.vencimiento = vencimiento
    const response = await Producto.create(producto)
    res.json(response)
    

    res.status(200)
})

routerProductos.delete('/', async (req,res) => {
    console.log("Body: "+JSON.stringify(req.body))
    const { id } = req.body
    console.log("Id:"+id)
    const producto = await getProductsById(id)
    if(producto){
        producto.eliminado = 1
    }
    producto.save()
    res.status(200)
    res.json(producto)
})

module.exports = routerProductos