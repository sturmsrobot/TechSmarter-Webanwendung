const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECCRET || "your-secret-key";

// Middleware-Funktion für die Authentifizierung
const authenticateToken = (req, res, next) => {
  // Hole den Token aus dem Authorization-Header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // Überprüfe, ob ein Token vorhanden ist
  if (token == null) {
    return res.sendStatus(401); // 401 Unauthorized, wenn kein Token vorhanden ist
  }

  // Verifiziere den Token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }
    // Füge ggf. Informationen zum Benutzer dem Request-Objekt hinzu
    req.user = decoded;
    // Rufe die nächste Middleware-Funktion auf
    next();
  });
};

module.exports = authenticateToken;
