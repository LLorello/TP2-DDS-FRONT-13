const Producto = require("../models/productos");
const { Op } = require("sequelize");

const getProductsByFilter = async (filtro)=>{

    let where = {}

    if(filtro){
        where = {[Op.or]: {
            nombre: { [Op.like]: `${filtro}%`},
            id: filtro
        }}
    }
    where.eliminado = 0

    const producto = await Producto.findAll({
        where: where,
        attributes: [
            'id',
            'nombre',
            'precio',
            'vencimiento'
        ],
    })
    
    return producto
}

const getProductsById = async (id)=>{

    let where = {}

    if(id){
        where = {id: id}
        where.eliminado = 0
    }
    const producto = await Producto.findOne({
        where: where,
        attributes: [
            'id',
            'nombre',
            'precio',
            'vencimiento'
        ],
    })
    
    return producto
}

const getAllProductsByFilter = async (filter)=>{

    let where = {}

    if(filter){
        where = {nombre: filter}
    }
    const producto = await Producto.findAll({
        where: where,
        attributes: [
            'id',
            'nombre',
            'precio',
            'vencimiento'
        ],
    })
    
    return producto
}

module.exports = { getProductsByFilter, getProductsById, getAllProductsByFilter } 
