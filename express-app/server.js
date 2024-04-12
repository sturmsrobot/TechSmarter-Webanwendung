const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const loggerMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const authenticationMiddleware = require("./middleware/authentication");
const cors = require("cors");
const sequelize = require("./config/database");
const routes = require("./routes/routes");
const testDatabaseConnection = require("./config/testDatabase");
const Stats = require("./models/Stats")

const app = express();
const PORT = process.env.PORT || 3000;
const secretKey = process.env.JWT_SECRET || "your-secret-key";

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

// Middleware-Funktion zur Überprüfung des JWT-Tokens
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]; // Token aus dem Header erhalten

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }
    req.user = decoded; // Decodierte Nutzerinformationen an die Anfrage anhängen
    next(); // Nächste Middleware aufrufen
  });
};

// Beispiel-Route, die eine authentifizierte Anfrage erfordert (JWT)
app.get("/api/protected", verifyToken, (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Dieser Server läuft auf Port ${PORT}`); // Serverstart
});

sequelize.queryInterface.describeTable("Stats").then(result => console.log(result))