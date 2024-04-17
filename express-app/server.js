const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const loggerMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const authenticationMiddleware = require("./middleware/authentication");
const authenticateToken = require("./middleware/authenticateToken");
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
app.use(authenticationMiddleware);
app.use(authenticateToken);
app.use("/api", routes);
app.use("/", questionAnswerRoutes);
app.use("/gamification", gamificationRoutes); // Verwendung gamificationRoutes
app.use("/api/auth", authRoutes);

module.exports = app;
