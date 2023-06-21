const DataTypes = require("sequelize");
const sequelize = require("../data/config");

const Cliente = sequelize.define(
    "Cliente",
    {
        dni: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        fecha_compra: { 
            type: DataTypes.DATEONLY, 
            allowNull: false
        },
        nombre: { 
            type: DataTypes.STRING, 
            allowNull: false
        },
        Eliminado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'El estado eliminado es requerido.'
                }
            }
        }
    },
    {
        sequelize,
        modelName: "cliente",
        timestamps: false
    }
);

module.exports = Cliente