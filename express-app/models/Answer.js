const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Question = require("./Question");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");

const Answer = sequelize.define(
  "Answer", 
{
  quiz_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  question_id: {
    type: DataTypes.INTEGER,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  answer_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_correct: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Answer.belongsTo(Question);

module.exports = Answer;
