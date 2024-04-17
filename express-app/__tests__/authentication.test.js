const request = require("supertest");
const app = require("../server");

// Vor dem Ausführen der Tests
beforeAll(async () => {
  // Hier den Server starten oder initialisieren
});

// Nach dem Ausführen der Tests
afterAll(async () => {
  // Hier den Server stoppen oder aufräumen
  await app.close(); // Hier wird der Server geschlossen
});

describe("Authentication Tests", () => {
  it("should return 200 status code when user is authenticated", async () => {
    // Authentifizierung durchführen, um ein JWT-Token zu erhalten
    const loginResponse = await request(app)
      .post("/api/login")
      .send({ username: "testuser", password: "password" });
    const token = loginResponse.body.token;

    // Testen des Zugriffs auf eine geschützte Route mit dem erhaltenen JWT-Token
    const res = await request(app)
      .get("/api/protected")
      .set("Authorization", token); // Setzen des Authorization-Headers mit dem JWT-Token
    expect(res.statusCode).toEqual(200);
  });

  it("should return 403 status code when no token is provided", async () => {
    // Testen des Zugriffs auf eine geschützte Route ohne Bereitstellung eines Tokens
    const res = await request(app).get("/api/protected");
    expect(res.statusCode).toEqual(403);
  });

  it("should return 401 status code when invalid token is provided", async () => {
    // Testen des Zugriffs auf eine geschützte Route mit einem ungültigen Token
    const res = await request(app)
      .get("/api/protected")
      .set("Authorization", "invalidtoken");
    expect(res.statusCode).toEqual(401);
  });
});
