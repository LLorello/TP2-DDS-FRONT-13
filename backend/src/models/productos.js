const DataTypes = require("sequelize");
const sequelize = require("../data/config");

const Producto = sequelize.define(
    "Producto",
    {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        nombre: { 
            type: DataTypes.STRING, 
            allowNull: false
        },
        precio: { 
            type: DataTypes.FLOAT, 
            allowNull: false, 
        },
        vencimiento: { 
            type: DataTypes.DATEONLY, 
            allowNull: false,
        }

    },
    {
        sequelize,
        modelName: "TB_Producto",
        timestamps: false
    }
);

module.exports = Producto