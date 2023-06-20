const DataTypes = require("sequelize");
const sequelize = require("../data/config");

const Proveedores = sequelize.define (
    "Proveedores",
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
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fechaIngreso: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },{
        tableName: "Proveedores",
        timestamps: false
    } 
);

module.exports = Proveedores