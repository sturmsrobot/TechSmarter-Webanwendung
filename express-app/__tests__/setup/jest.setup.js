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
      await sequelize.dropSchema("users");
      await sequelize.dropSchema("stats");
      await sequelize.dropSchema("quizzes");
      await sequelize.dropSchema("questions");
      await sequelize.dropSchema("answers");
      await sequelize.sync();
      // Daten für Tests einfügen
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
