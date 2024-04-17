require("../../src/server");
const TodoModel = require("../../src/database/models/TodoModel");
const todoSequelize = require("../../src/database/setup/database");
const TestDataTodos = require("./test-data/TestDataTodos");

module.exports = async () => {
  try {
    // todoSequelize.dropSchema("Todos").then(() => {
    //   todoSequelize.sync();
    // });
    console.log("PRDDD", process.env);
    await todoSequelize.dropSchema("Todos");
    await todoSequelize.sync();
    // DB mit Daten füllen, um DB auf Test Szenarien vorzubereiten
    await TodoModel.bulkCreate(TestDataTodos);
  } catch (e) {
    console.error("MY DB Issue", e);
  }
};