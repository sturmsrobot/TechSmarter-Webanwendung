const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Stats = sequelize.define(
  "Stats", 
  {
  stats_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  quiz_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
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

Stats.associate = (models) => {
};

Stats.findByUsername = async function (username) {
  try {
    const users = await Stats.findAll({ where: { username } });
    return Stats;
  } catch (error) {
    throw new Error("Fehler beim Suchen von Benutzern: " + error);
  }
};

module.exports = Stats;
