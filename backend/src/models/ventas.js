const DataTypes = require("sequelize");
const sequelize = require("../data/config");

const Venta = sequelize.define(
    "Venta",
    {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        fechaVenta: { 
            type: DataTypes.DATE, 
            allowNull: false
        },
        tipoFactura: { 
            type: DataTypes.STRING, 
            allowNull: false, 
        },
        eliminado: {
            type: DataTypes.INTEGER,
        }
    },
    {
        sequelize,
        modelName: "venta",
        timestamps: false
    }
);

module.exports = Venta