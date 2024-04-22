const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Stats = sequelize.define("Stats", {
  statsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  quizId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  progress: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  rightAnswers: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  wrongAnswers: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  score: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
});

module.exports = Stats;
