const express = require("express");
const bodyParser = require("body-parser"); // Importiere body-parser
const { body, validationResult } = require("express-validator"); // Importiere express-validator
const loggerMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const authenticationMiddleware = require("./middleware/authentication");
const cors = require("cors");
const sequelize = require("./config/database"); //Datenbankverbindung
const routes = require("./routes/routes");
const Users = require("./models/Users");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

// Initialisierung Datenbank
sequelize
  .sync()
  .then(() => {
    console.log("Datenbankverbindung erfolgreich hergestellt!");
  })
  .catch((err) => {
    console.error("Fehler beim Verbinden mit der Datenbank:", err);
  }); // Synchronisierung der Datenbankmodelle

// Verbindung zur Datenbank herstellen

app.use(bodyParser.json()); // body-parser verwenden, um JSON-Anfragen zu parsen
app.use(bodyParser.urlencoded({ extended: true })); // body-parser, um URL-codierten Anforderungskörper zu parsen
app.use(cors());
app.use(loggerMiddleware); // Verwendung der Middleware für Anfragen-Logging
app.use(errorHandlingMiddleware); // Verwendung der Middleware für Fehlerbehandlung
app.use(authenticationMiddleware); // Verwendung der Middleware für Authentifizierung

app.use("/api", routes); // Verwendung definierter Routen

app.get("/", (req, res) => {
  res.send("Willkommen auf unserer Express-App!");
});

app.listen(PORT, () => {
  console.log(`Dieser Server läuft auf Port ${PORT}`); // Serverstart
});

app.post(
  "/api/users",
  [
    // Hier fügst du die Validierungsregeln hinzu
    body("username").notEmpty().isString(),
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().isString().isLength({ min: 6 }),
  ],
  (req, res) => {
    // Validierungsergebnisse überprüfen
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Wenn die Validierung erfolgreich ist, fahre ich hier mit der Datenbankoperation fort
    const { username, email, password } = req.body;
    User.create({
      username: username,
      email: email,
      password: password,
    })
      .then((user) => {
        res.status(201).json(user); // Erfolgreich erstellt
      })
      .catch((error) => {
        console.error("Fehler beim Erstellen des Benutzers:", error);
        res.status(500).json({ message: "Interner Serverfehler!" });
      });
  }
);
