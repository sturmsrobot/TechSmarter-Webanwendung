const sequelize = require("../../config/database");
const User = require("../../models/Users");
const TestDataUsers = require("./test-data/TestDataUsers");

const customTestEnvironment = () => {
  return async () => {
    try {
      await sequelize.dropSchema("users");
      await sequelize.sync();
      // DB mit Daten füllen, um DB auf Test Szenarien vorzubereiten
      await User.bulkCreate(TestDataUsers);
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
