const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const testDatabaseConnection = require("./config/testDatabase");
const loggerMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const authenticationMiddleware = require("./middleware/authentication");
const authenticateToken = require("./middleware/authenticateToken");
const routes = require("./routes");
const questionAnswerRoutes = require("./routes/questionAnswerRoutes");
const gamificationRoutes = require("./routes/gamificationRoutes"); // Ändere den Namen der importierten Variable

const app = express();
const PORT = process.env.PORT || 3000;

testDatabaseConnection();

require("dotenv").config();

// Initialisierung Datenbank
sequelize
  .sync()
  .then(() => {
    console.log("Datenbankverbindung erfolgreich hergestellt!");
  })
  .catch((err) => {
    console.error("Fehler beim Verbinden mit der Datenbank:", err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(loggerMiddleware);
app.use(errorHandlingMiddleware);
app.use(authenticationMiddleware);
app.use(authenticateToken);
app.use("/api", routes);
app.use("/", questionAnswerRoutes);
app.use("/gamification", gamificationRoutes); // Verwendung gamificationRoutes

const server = app.listen(PORT, () => {
  console.log(`Dieser Server läuft auf Port ${PORT}`);
});

module.exports = { app, server };
