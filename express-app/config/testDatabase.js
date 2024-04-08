const sequelize = require("./database");

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Die Datenbankverbindung wurde erfolgreich hergestellt.");
  } catch (error) {
    console.error("Fehler beim Verbinden mit der Datenbank:", error);
  }
}

testDatabaseConnection();
