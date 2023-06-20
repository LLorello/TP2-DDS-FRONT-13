const DataTypes = require("sequelize");
const sequelize = require("../data/config");

const Empleado = sequelize.define(
    "Empleados",
    {
        legajo: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        nombre: { 
            type: DataTypes.STRING, 
            allowNull: false
        },
        nacimiento: { 
            type: DataTypes.DATEONLY, 
            allowNull: false, 
        },
    },
    {
        sequelize,
        modelName: "Empleado",
        timestamps: false
    }
);

module.exports = Empleado