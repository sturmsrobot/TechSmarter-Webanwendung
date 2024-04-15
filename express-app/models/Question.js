const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Question = sequelize.define(
  'Question', 
  {
  quiz_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  question_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    },
  question_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Question;