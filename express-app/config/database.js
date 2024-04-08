const Sequelize = require("sequelize");

// Datenbankverbindung konfigurieren:
const sequelize = new Sequelize(
  "database_name",
  "actual_username",
  "StrongPassword123!",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
