const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");

// GET-Anforderungen (Benutzerdaten abrufen):
router.get("/all", (req, res) => {
  User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byId", (req, res) => {
  const { id } = req.query;
  User.findOne({ where: { id: id } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byName", (req, res) => {
  const { username } = req.query;
  User.findOne({ where: { username: username } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

// POST-Anforderungen (Neuen Benutzer erstellen):
router.post(
  "/",
  [
    body("id").trim().isNumeric().notEmpty(),
    body("username").trim().isString(),
    body("email").trim().notEmpty().isEmail(),
    body("password").trim().notEmpty().isString().isLength({ min: 6 }),
    body("points").trim().isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Code, um einen Benutzer zu erstellen
    const { id, username, email, password, points } = req.body;
    const User = await User.create({
      id: id,
      username: username,
      email: email,
      password: password,
      points: points,
  });
    res.send("Neuer Benutzer erfolgreich erstellt!");
  }
);

// PUT-Anforderungen (Benutzerdaten aktualisieren):
router.put(
  "/:userId",
  [
    body("id").trim().isNumeric().notEmpty(),
    body("username").trim().isString(),
    body("email").trim().notEmpty().isEmail(),
    body("password").trim().notEmpty().isString().isLength({ min: 6 }),
    body("points").trim().isNumeric(),
  ],
  async (req, res) => {
    const { userId  } = req.params;
    const { username, email, password, points } = req.body;

  try {
    // Finde das Quiz mit der angegebenen ID
    const user = await User.findOne({ where: { userId: userId } });

    if (!user) {
      return res.status(404).json({ message: "User nicht gefunden!" });
    }

    // Aktualisiere die Userdaten
    username = username;
    email = email;
    password = password;
    points = points;

    res.json(quiz);
  } catch (error) {
    console.error("Fehler beim Aktualisieren des Quizzes:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

// DELETE-Anforderungen (Benutzerdaten löschen):
router.delete("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    // Finde den User mit der angegebenen userId
    const User = await User.findOne({ where: { userId: userId } });

    if (!User) {
      return res.status(404).json({ message: "User nicht gefunden!" });
    }

    // Lösche den User
    await user.destroy();

    res.json({ message: "User erfolgreich gelöscht!" });
  } catch (error) {
    console.error("Fehler beim Löschen des Users:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});


// Benutzerpunkte hinzufügen:
router.post(
  "/addPoints",  
  async (req, res) => {
  const { username, points } = req.body;
  try {
    // Finde den Benutzer in der Datenbank
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "Benutzer nicht gefunden" });
    }
    // Füge die Punkte zum Benutzer hinzu
    user.points += points;
    await user.save();
    res.json({ message: "Punkte erfolgreich hinzugefügt" });
  } catch (error) {
    console.error("Fehler beim Hinzufügen von Punkten:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

// Benutzerpunkte subtrahieren:
router.post("/subtractPoints", async (req, res) => {
  const { username, points } = req.body;
  try {
    // Finde den Benutzer in der Datenbank
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "Benutzer nicht gefunden" });
    }
    // Überprüfe, ob genügend Punkte vorhanden sind
    if (user.points < points) {
      return res
        .status(400)
        .json({ message: "Nicht genügend Punkte vorhanden" });
    }
    // Subtrahiere die Punkte vom Benutzer
    user.points -= points;
    await user.save();
    res.json({ message: "Punkte erfolgreich abgezogen" });
  } catch (error) {
    console.error("Fehler beim Subtrahieren von Punkten:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

module.exports = router;
