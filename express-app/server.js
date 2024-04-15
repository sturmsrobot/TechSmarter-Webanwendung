const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const loggerMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const authenticationMiddleware = require("./middleware/authentication");
const authenticateToken = require("./middleware/authenticateToken");
const cors = require("cors");
const sequelize = require("./config/database");
const routes = require("./routes/routes");
const testDatabaseConnection = require("./config/testDatabase");
const Stats = require("./models/Stats");
const { Age } = require("@chromeq/age"); // Importiere Age aus @chromeq/age

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

app.use(bodyParser.json()); // body-parser verwenden, um JSON-Anfragen zu parsen
app.use(bodyParser.urlencoded({ extended: true })); // body-parser, um URL-codierten Anforderungskörper zu parsen
app.use(cors());
app.use(loggerMiddleware); // Verwendung der Middleware für Anfragen-Logging
app.use(errorHandlingMiddleware); // Verwendung der Middleware für Fehlerbehandlung
app.use(authenticationMiddleware); // Verwendung der Middleware für Authentifizierung
app.use(authenticateToken); // Verwendung der Middleware für Authentifizierung JWT

// Beispiel-Route, die eine authentifizierte Anfrage erfordert (JWT)
app.get("/api/protected", (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

// Route für die Authentifizierung und Generierung von JWT
app.post("/api/login", (req, res) => {
  // Annahme: Hier würdest du Benutzerinformationen validieren und ggf. einen JWT erstellen
  const user = { id: 1, username: "example" };

  jwt.sign({ user }, secretKey, { expiresIn: "1h" }, (err, token) => {
    if (err) {
      return res.status(500).json({ message: "Error generating token" });
    }
    res.json({ token });
  });
});

app.use("/api", routes); // Verwendung definierter Routen

app.get("/", (req, res) => {
  res.send("Willkommen auf unserer Express-App!");
});

app.post(
  "/api/users",
  [
    // Hinzufügen der Validierungsregeln:
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

//Gamification:
// Initialisiere ein neues Spiel
const age = new Age();

// Füge einem Benutzer Punkte hinzu
age.addPoints("username", 100); // Fügt dem Benutzer 'username' 100 Punkte hinzu

// Ziehe einem Benutzer Punkte ab
age.subtractPoints("username", 50); // Zieht dem Benutzer 'username' 50 Punkte ab

// Überprüfe die Punkteanzahl eines Benutzers
const userPoints = age.getPoints("username"); // Ruft die Punkte des Benutzers 'username' ab

// Verwalte Trophäen für Benutzer
age.addAchievement("username", "High Score"); // Vergibt dem Benutzer 'username' die Trophäe 'High Score'
age.removeAchievement("username", "High Score"); // Entfernt die Trophäe 'High Score' vom Benutzer 'username'

app.listen(PORT, () => {
  console.log(`Dieser Server läuft auf Port ${PORT}`); // Serverstart
});
