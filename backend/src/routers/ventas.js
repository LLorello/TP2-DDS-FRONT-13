const Router = require('express')
const Venta = require("../models/ventas")
const {getVentasByFilter, getVentaById, getAllVentasByTipoFactura} = require("../services/ventas.service.js")

const routerVentas = Router();

routerVentas.get('/', async (req,res) => {
    const ventas = await getVentasByFilter()
    res.status(200)
    res.json(ventas)
})

routerVentas.get('/all/', async (req,res) => {
    const ventas = await getAllVentasByTipoFactura()
    res.status(200)
    res.json(ventas)
})

routerVentas.get('/:filtro', async (req,res) => {
    const ventas = await getVentasByFilter(req.params.filtro)
    res.status(200)
    res.json(ventas)
})

routerVentas.put('/', async (req,res) => {

    const { id, fechaVenta, tipoFactura } = req.body
    const venta = await getVentaById(id)

    console.log(venta)

    if(id){ venta.id = id }
    if(fechaVenta){ venta.fechaVenta = fechaVenta }
    if(tipoFactura){venta.tipoFactura = tipoFactura }
    venta.save()

    res.status(200)
    res.json(venta)
})

routerVentas.post('/', async (req,res) => {

    const { fechaVenta, tipoFactura } = req.body

    const venta = {}
    venta.fechaVenta = fechaVenta
    venta.eliminado = 0
    venta.tipoFactura = tipoFactura
    const response = await Venta.create(venta)
    res.json(response)
    

    res.status(200)
})

routerVentas.delete('/', async (req,res) => {
    console.log("Body: "+JSON.stringify(req.body))
    const { id } = req.body
    console.log("Id:"+id)
    const venta = await getVentaById(id)
    if(venta){
        venta.eliminado = 1
    }
    venta.save()
    res.status(200)
    res.json(venta)
})

/*
routerVentas.get("/:id", async (req,res) => { 
    const vta = await Venta.findOne({ 
        where: {
            id: req.params.id
        }
    });
    console.log(`|${vta.id}|${vta.fechaVenta}|${vta.tipoFactura}`);
    res.json(vta)
})
*/

module.exports = routerVentas