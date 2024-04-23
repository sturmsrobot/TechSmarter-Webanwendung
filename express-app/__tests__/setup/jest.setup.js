const sequelize = require("../../config/database");

const TestDataUsers = require("./test-data/TestDataUsers");
const TestDataStats = require("./test-data/TestDataStats");
const TestDataQuizzes = require("./test-data/TestDataQuizzes");
const TestDataAnswer = require("./test-data/TestDataAnswer");
const TestDataQuestion = require("./test-data/TestDataQuestion");
const Questions = require("../../models/Questions");
const Answers = require("../../models/Answers");
const User = require("../../models/Users");
const Stats = require("../../models/Stats");
const Quizzes = require("../../models/Quizzes");

module.exports = async () => {
    try {
      await sequelize.dropSchema("users");
      await sequelize.dropSchema("stats");
      await sequelize.dropSchema("quizzes");
      await sequelize.dropSchema("questions");
      await sequelize.dropSchema("answers");
      await sequelize.sync();
      // Daten für Tests einfügen
      await User.bulkCreate(TestDataUsers);
      await Stats.bulkCreate(TestDataStats);
      await Quizzes.bulkCreate(TestDataQuizzes);
      await Questions.bulkCreate(TestDataQuestion);
      await Answers.bulkCreate(TestDataAnswer);
    } catch (e) {
      console.error("MY DB Issue", e);
    }

  };

// module.exports = {
//   testEnvironment: customTestEnvironment(),
//   moduleNameMapper: {
//     "^jsonwebtoken$": "<rootDir>/__mocks__/jsonwebtoken.js",
//   },
//   testRegex: /\.test\.js$/,
// };
