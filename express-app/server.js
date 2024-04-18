const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const loggerMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const authenticateUser = require("./middleware/authenticateUser");
const routes = require("./routes");
const questionAnswerRoutes = require("./routes/questionAnswerRoutes");
const gamificationRoutes = require("./routes/gamificationRoutes"); // Ändere den Namen der importierten Variable
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(loggerMiddleware);
app.use(errorHandlingMiddleware);
app.use("/api", routes);
app.use("/", questionAnswerRoutes);
app.use("/gamification", gamificationRoutes); // Verwendung gamificationRoutes
app.use("/api/auth", authRoutes);

app.post("/api/login", authenticateUser, (req, res) => {
  // Benutzeranmeldung erfolgreich authentifiziert
  res.json({ message: "Benutzer erfolgreich angemeldet", user: req.user });
});

module.exports = app;
