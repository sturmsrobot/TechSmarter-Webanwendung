const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Question = require("./Questions");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");

const Answer = sequelize.define(
  "Answer", 
{
  quizId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  questionId: {
    type: DataTypes.INTEGER,
  },
  answerId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
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
