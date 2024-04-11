const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Question = require("./Question");

const Answer = sequelize.define("Answer", {
  answerText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Answer.belongsTo(Question);

module.exports = Answer;
