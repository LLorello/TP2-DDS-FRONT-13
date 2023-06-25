const Venta = require('../models/ventas.js')
const { Op } = require('sequelize')

const getVentasByFilter = async (filter) => {
    const whereQuery = {}

      if(filter){
        whereQuery.id = { [Op.like]: `%${filter}%`}  
    }

    /*
    if (filter) {
        whereQuery = {
            [Op.or]: {
                tipoFactura: { [Op.like]: `${filter}%` },
                id: { [Op.like]: `${filter}%` }
            }
        }
    }
    */

    whereQuery.eliminado = 0

    const venta = await Venta.findAll({
        where: whereQuery,
        attributes: [
            'id',
            'fechaVenta',
            'tipoFactura'
        ],
    })

    return venta
}

const getVentaById = async (id)=>{
    whereQuery = {}
    
    if(id){
        whereQuery = {id: id}
        whereQuery.eliminado = 0
    }
    const venta = await Venta.findOne({
        where: whereQuery,
        attributes: [
            'id',
            'fechaVenta',
            'tipoFactura'
        ],
    })
    
    return venta
}

const getAllVentasByTipoFactura = async (filter)=>{

    const whereQuery = {}

    if(filter){
        whereQuery = {tipoFactura: filter}
    }

    const venta = await Venta.findAll({
        where: whereQuery,
        attributes: [
            'id',
            'fechaVenta',
            'tipoFactura'
        ],
    })
    
    return venta
}

module.exports = {getVentasByFilter, getVentaById, getAllVentasByTipoFactura}

