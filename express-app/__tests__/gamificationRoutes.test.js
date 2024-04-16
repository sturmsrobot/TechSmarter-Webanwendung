const request = require("supertest");
const { app, server } = require("../server");

// Vor dem Ausführen der Tests
beforeAll(async () => {
  // Hier den Server starten oder initialisieren
});

// Nach dem Ausführen der Tests
afterAll(async () => {
  // Hier den Server stoppen oder aufräumen
  await server.close(); // Beispiel: Hier wird der Server über die close-Methode geschlossen
});

describe("Gamification Routes", () => {
  it("should add points to a user", async () => {
    const response = await request(app)
      .post("/gamification/addPoints")
      .send({ username: "example_user", points: 100 });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Points added successfully");
    // Hier können weitere Erwartungen hinzugefügt werden:
  });

  it("should remove points from a user", async () => {
    const response = await request(app)
      .post("/gamification/removePoints")
      .send({ username: "example_user", points: 50 });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Points removed successfully");
    // Hier können weitere Erwartungen hinzugefügt werden:
  });
});
