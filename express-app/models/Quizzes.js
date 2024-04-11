const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Quizzes = sequelize.define("Quizzes", {
  quiz_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quiz_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  questions_total: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

// Definieren der Assoziationen, falls erforderlich
Quizzes.associate = (models) => {
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

module.exports = Quizzes;
