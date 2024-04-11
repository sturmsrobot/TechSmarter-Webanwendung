const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize, // Übergeben Sie das Sequelize-Objekt hier
        modelName: "User",
      }
    );
  }
}

module.exports = User;
