const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Quizzes = sequelize.define("Quiz", {
    quizId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
    quizName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    questionsTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Quizzes;
