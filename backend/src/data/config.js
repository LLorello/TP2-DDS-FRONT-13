const Sequelize = require("sequelize");

const sequelize = new Sequelize("db.sqlite", "", "", {
    dialect: "sqlite",
    host: "src/data/db.sqlite"
});

module.exports = sequelize