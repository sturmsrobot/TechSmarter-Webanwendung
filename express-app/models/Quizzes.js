const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Quizzes = sequelize.define(
  "Quiz", 
  {
  quiz_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quiz_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  questions_total: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

Quizzes.associate = (models) => {
};


Quizzes.findByQuiz_Id = async function (quiz_id) {
  try {
    const quizzes = await Quiz.findAll({ where: { quiz_id } });
    return quizzes;
  } catch (error) {
    throw new Error("Fehler beim Suchen von Quizzes: " + error);
  }
};

module.exports = Quizzes;
