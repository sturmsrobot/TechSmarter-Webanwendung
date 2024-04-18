const sequelize = require("../../config/database");
const User = require("../../models/Users");
const TestDataAnswer = require("./test-data/TestDataAnswer");
const TestDataQuestion = require("./test-data/TestDataQuestion");
const TestDataQuizzes = require("./test-data/TestDataQuizzes");
const TestDataStats = require("./test-data/TestDataStats");
const TestDataUsers = require("./test-data/TestDataUsers");

const customTestEnvironment = () => {
  return async () => {
    try {
      await sequelize.dropSchema("users");
      await sequelize.dropSchema("stats");
      await sequelize.dropSchema("quizzes");
      await sequelize.dropSchema("questions");
      await sequelize.dropSchema("answers");
      await sequelize.sync();
      // DB mit Daten füllen, um DB auf Test Szenarien vorzubereiten
      await User.bulkCreate(TestDataUsers);
      await User.bulkCreate(TestDataStats);
      await User.bulkCreate(TestDataQuizzes);
      await User.bulkCreate(TestDataQuestion);
      await User.bulkCreate(TestDataAnswer);
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
