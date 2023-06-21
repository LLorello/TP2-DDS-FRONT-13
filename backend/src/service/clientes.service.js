const Cliente = require("../models/clientes")
const {Op} = require("sequelize")

const getClientes = async (filters) => {
    const whereQuery = {}
    if(filters){
        if(filters.nombre){
            whereQuery.nombre = { [Op.like]: `%${filters.nombre}%`}  
        }
    }

    whereQuery.Eliminado = 0

    const resultado = await Cliente.findAll({
        where: whereQuery,
        attributes: [
            'dni',
            'fecha_compra',
            'nombre',
            'Eliminado'
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
        where: { dni: clienteActualizar.dni, Eliminado: false },
    });
    if (!cliente) {
        throw new ResourceNotFound("Cliente no encontrado");
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
    
    return { dni: clienteActualizar.dni };
    }

/*

// ====================PUT====================
const editarPelicula = async (peliculaCmd) => {
    const pelicula = await sequelize.models.Peliculas.findOne({
        where: { Id: peliculaCmd.id, Eliminado: false },
    });
    if (!pelicula) {
        throw new ResourceNotFound("Película no encontrada");
    }

    const updatedPelicula = await sequelize.models.Peliculas.update(
        {
            Titulo: peliculaCmd.titulo,
            Director: peliculaCmd.director,
            Genero: peliculaCmd.genero,
            Sinopsis: peliculaCmd.sinopsis,
            Duracion: peliculaCmd.duracion,
            IdClasificacion: peliculaCmd.idClasificacion
        },
        {
            where: { Id: peliculaCmd.id }
        });
    
    return { id: peliculaCmd.id };

}

/* ====================DELETE==========================
const eliminarPelicula = async (id) => {
    const pelicula = await sequelize.models.Peliculas.findOne({
        where: { Id: id, Eliminado: false },
    });
    if (!pelicula) {
        throw new ResourceNotFound("Película no encontrada");
    }

    const updatedPelicula = await sequelize.models.Peliculas.update(
        {
            Eliminado: true
        },
        {
            where: { Id: id}
        });
    
    return { updatedPelicula};

}

const peliculasService = {
    getPeliculas,
    insertarPelicula,
    editarPelicula,
    eliminarPelicula
}
*/
const clientesService = {
    getClientes,
    insertarCliente,
    editarCliente,
}

module.exports= clientesService;
