const express = require("express");
const loggerMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const authenticationMiddleware = require("./middleware/authentication");
const sequelize = require("./config/database"); //Datenbankverbindung
const routes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3306;

// Initialisierung Datenbank
sequelize.sync(); // Synchronisierung der Datenbankmodelle

app.use(loggerMiddleware); // Verwendung der Middleware für Anfragen-Logging
app.use(errorHandlingMiddleware); // Verwendung der Middleware für Fehlerbehandlung
app.use(authenticationMiddleware); // Verwendung der Middleware für  Authentifizierung

app.use("/api", routes); // Verwendung definierter Routen

app.get("/", (req, res) => {
  res.send("Willkommen auf unserer Express-App!");
});

app.listen(PORT, () => {
  console.log(`Dieser Server läuft auf Port ${PORT}`); // Serverstart
});
