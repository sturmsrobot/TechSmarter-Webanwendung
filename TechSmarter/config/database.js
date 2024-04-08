const Sequelize = require("sequelize");

// Datenbankverbindung konfigurieren:
const sequelize = new Sequelize("database_name", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
