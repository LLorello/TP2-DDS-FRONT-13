const Router = require('express')
const Cliente = require("../models/clientes")

const routerCliente = Router();


routerCliente.put('/api/clientes', async (req,res) => {
    const {dni} = req.query
    const {nombre} = req.query
    const {fecha_compra} = req.query

        const cliente = await Cliente.findOne({where: {dni: dni}})
        if(cliente){
            cliente.nombre = nombre
            cliente.fecha_compra = fecha_compra
            await cliente.save()
            res.status(200).json(cliente)
        }else{
            res.status(404).json({mensaje: "Post no encontrado"})
        }

      
});

routerCliente.get('/api/clientes', async (req,res) => {
    let where = {};
    if (req.query.nombre != undefined && req.query.nombre !== "") {
        where.dni = req.query.nombre
    }

    let clientes = await Cliente.findAll({
        attributes: [
        "dni",
        "fecha_compra",
        "nombre",
        ],
        where,
    });

    res.json(clientes);
      
});

routerCliente.post('/api/clientes', async(req, res) => {
    
    try{
        const data = {
            dni: req.query.dni,
            fecha_compra: req.query.fecha_compra,
            nombre: req.query.nombre,
        };
        
        const clienteNuevo = await Cliente.create(data);
        
        res.json(clienteNuevo);

    }catch(err) {
        console.error(err);
    }
 
});

routerCliente.delete('/api/clientes', async(req, res) => {
    
    const cliente = await Cliente.findOne({
        where: {
            dni:req.query.dni
        }
    });

    res.json(cliente)
    
    if (cliente){
        await cliente.destroy();
    }
})


module.exports = routerCliente
