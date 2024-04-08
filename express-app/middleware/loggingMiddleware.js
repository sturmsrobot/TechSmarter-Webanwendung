const logger = require("winston");

function loggingMiddleware(req, res, next) {
  logger.info(`${req.method} ${req.url}`);
  next();
}

module.exports = loggingMiddleware;
