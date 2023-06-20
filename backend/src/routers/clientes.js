const Router = require('express')
const Cliente = require("../models/clientes")

const routerCliente = Router();


routerCliente.put('/api/clientes', async (req,res) => {
    const data = req.body

        const cliente = await Cliente.findOne({where: {dni: data.dni}})
        if(cliente){
            cliente.nombre = data.nombre
            cliente.fecha_compra = data.fecha_compra
            await cliente.save()
            res.status(200).json(cliente)
        }else{
            res.status(404).json({mensaje: "Post no encontrado"})
        }

      
})

module.exports = routerCliente