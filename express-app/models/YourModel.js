const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const YourModel = sequelize.define("YourModel", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // weitere Spalten zur Datenbanktabelle hinzufügen?
});

module.exports = YourModel;
