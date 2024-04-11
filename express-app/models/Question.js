const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Question = sequelize.define('Question', {
  questionText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Question;