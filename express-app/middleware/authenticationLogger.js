function loggerMiddleware(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // Weiterleitung an die nächste Route
}

module.exports = loggerMiddleware;
