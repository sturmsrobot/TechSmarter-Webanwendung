const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware/authenticateToken");
const { mockRequest, mockResponse } = require("jest-mock-req-res");

describe("authenticateToken Middleware", () => {
  test("should call next() if token is valid", () => {
    const req = mockRequest({
      headers: {
        authorization: "Bearer validtoken",
      },
    });
    const res = mockResponse();
    const next = jest.fn();

    // Mocken der jwt.verify-Funktion, um einen gültigen Token zu simulieren
    jwt.verify = jest.fn((token, secretKey, callback) => {
      callback(null, { username: "testuser" });
    });

    authenticateToken(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(req.user).toEqual({ username: "testuser" });
  });

  test("should return 401 if no token provided", () => {
    const req = mockRequest();
    const res = mockResponse();
    const next = jest.fn();

    authenticateToken(req, res, next);

    expect(res.sendStatus).toHaveBeenCalledWith(401);
  });

  test("should return 401 if token is invalid", () => {
    const req = mockRequest({
      headers: {
        authorization: "Bearer invalidtoken",
      },
    });
    const res = mockResponse();
    const next = jest.fn();

    // Mocken der jwt.verify-Funktion, um einen ungültigen Token zu simulieren
    jwt.verify = jest.fn((token, secretKey, callback) => {
      callback(new Error("Invalid token"));
    });

    authenticateToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Failed to authenticate token",
    });
  });
});
