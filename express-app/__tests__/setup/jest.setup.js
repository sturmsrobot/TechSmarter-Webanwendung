const sequelize = require("../../config/database");
const { User, Stats, Quizzes } = require("../../models");
const TestDataUsers = require("./test-data/TestDataUsers");
const TestDataStats = require("./test-data/TestDataStats");
const TestDataQuizzes = require("./test-data/TestDataQuizzes");
const TestDataAnswer = require("./test-data/TestDataAnswer");
const TestDataQuestion = require("./test-data/TestDataQuestion");

const customTestEnvironment = () => {
  return async () => {
    try {
      // Gesamtes Schema löschen
      await sequelize.drop();
      // Neue Tabellen basierend auf den Modellen erstellen
      await sequelize.sync();
      // Daten für Tests einfügen
      await User.bulkCreate(TestDataUsers);
      await Stats.bulkCreate(TestDataStats);
      await Quizzes.bulkCreate(TestDataQuizzes);
      await Answer.bulkCreate(TestDataAnswer);
      await Question.bulkCreate(TestDataQuestion);
    } catch (e) {
      console.error("MY DB Issue", e);
    }
    return "node";
  };
};

module.exports = {
  testEnvironment: customTestEnvironment(),
  moduleNameMapper: {
    "^jsonwebtoken$": "<rootDir>/__mocks__/jsonwebtoken.js",
  },
  testRegex: /\.test\.js$/,
};
