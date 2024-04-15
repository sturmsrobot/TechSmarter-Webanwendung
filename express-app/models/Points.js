const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Point = sequelize.define("Point", {
  // Definition der Point-Attribute
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Definiere die Beziehung zu Benutzern
Point.belongsTo(User); // Ein Punkt gehört zu einem Benutzer

module.exports = Point;
