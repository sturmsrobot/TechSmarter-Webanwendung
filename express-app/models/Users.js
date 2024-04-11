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


// Definieren der Assoziationen, falls erforderlich
User.associate = (models) => {
  // Definition der Assoziationen, falls benötigt
};

// Statische Methode für Benutzersuche nach Benutzernamen
User.findByUsername = async function (username) {
  try {
    const users = await User.findAll({ where: { username } });
    return users;
  } catch (error) {
    throw new Error("Fehler beim Suchen von Benutzern: " + error);
  }
};

module.exports = User;
