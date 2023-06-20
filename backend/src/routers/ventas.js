const Router = require('express')
const Venta = require("../models/ventas")

const routerVentas = Router();

routerVentas.get("/:id", async (req,res) => { 
    const vta = await Venta.findOne({ 
        where: {
            id: req.params.id
        }
    });
    console.log(`|${vta.id}|${vta.fechaVenta}|${vta.tipoFactura}`);
    res.json(vta)
})

module.exports = routerVentas