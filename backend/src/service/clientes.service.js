const Cliente = require("../models/clientes")
const {Op} = require("sequelize")

const getClientes = async (filters) => {
    const whereQuery = {}
    if(filters){
        if(filters.nombre){
            whereQuery.nombre = { [Op.like]: `%${filters.nombre}%`}  
        }
    }

    whereQuery.eliminado = 0

    const resultado = await Cliente.findAll({
        where: whereQuery,
        attributes: [
            'dni',
            'fecha_compra',
            'nombre',
            'eliminado'
        ],
        order: [['nombre', 'ASC']]
    })
    console.log('resultado', resultado)
    return resultado.map(cliente => {
        return {
            dni: cliente.dataValues.dni,
            fecha_compra: cliente.dataValues.fecha_compra,
            nombre: cliente.dataValues.nombre
        }
    })
}

const insertarCliente = async (clienteNuevo) => {
    const resultado = await Cliente.create({
        dni: clienteNuevo.dni,
        fecha_compra: clienteNuevo.fecha_compra,
        nombre: clienteNuevo.nombre
    })

    return {
        dni: resultado.dataValues.dni,
        fecha_compra: resultado.dataValues.fecha_compra,
        nombre: resultado.dataValues.nombre
    };
}

const editarCliente = async (clienteActualizar) => {
    const cliente = await Cliente.findOne({
        where: { dni: clienteActualizar.dni, eliminado: false },
    });
    if (!cliente) {
        console.log("Cliente not found");
    }

    const updatedCliente = await Cliente.update(
        {
            dni: clienteActualizar.dni,
            fecha_compra: clienteActualizar.fecha_compra,
            nombre: clienteActualizar.nombre,
        },
        {
            where: { dni: clienteActualizar.dni }
        });
    
    return { dni: clienteActualizar.dni};
    }


const eliminarCliente = async (dni) => {
    const cliente = await Cliente.findOne({
        where: { dni: dni, eliminado: false },
    });
    if (!cliente) {
        console.log("Cliente not found");
    }

    const updatedCliente= await Cliente.update(
        {
            eliminado: true
        },
        {
            where: { dni: dni}
        });
    
    return { updatedCliente};

}

const clientesService = {
    getClientes,
    insertarCliente,
    editarCliente,
    eliminarCliente

}

module.exports= clientesService;
