const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Question = require("./Question");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");

const Answer = sequelize.define(
  "Answer", 
{
  quiz_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question_id: {
    type: DataTypes.INTEGER,
  },
  answer_id: {
    type: DataTypes.INTEGER,
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
