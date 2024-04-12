const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Question = sequelize.define(
  'Question', 
  {
  question_id: {
    type: DataTypes.INTEGER,
    },
  question_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Question;