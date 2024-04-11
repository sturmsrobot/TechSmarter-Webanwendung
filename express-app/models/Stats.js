const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Stats = sequelize.define("Stats", {
  quiz_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  progress: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  right_answers: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  wrong_answers: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  score: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
});

// Definieren der Assoziationen, falls erforderlich
Stats.associate = (models) => {
  // Definition der Assoziationen, falls benötigt
};

// Statische Methode für Benutzersuche nach Benutzernamen
Stats.findByUsername = async function (username) {
  try {
    const users = await Stats.findAll({ where: { username } });
    return users;
  } catch (error) {
    throw new Error("Fehler beim Suchen von Benutzern: " + error);
  }
};

module.exports = Stats;
