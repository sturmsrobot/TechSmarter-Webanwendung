const express = require("express");
const loggerMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const authenticationMiddleware = require("./middleware/authentication");
const sequelize = require("./config/database"); //Datenbankverbindung
const routes = require("./routes/routes");
const { validationResult } = require("express-validator");

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

const { body, validationResult } = require("express-validator");

app.post(
  "/api/users",
  [
    body("username").notEmpty().isString(),
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().isString().isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Wenn die Validierung erfolgreich ist, fahre ich hier mit der Datenbankoperation fort
  }
);
