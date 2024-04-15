const User = require("../models/Users");

// Route zum Abrufen aller Benutzer
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Fehler beim Abrufen des Benutzers:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
};
