const request = require("supertest");
const { app } = require("../server");

// Vor dem Ausführen der Tests
beforeAll(async () => {
  // Hier den Server starten oder initialisieren
});

// Nach dem Ausführen der Tests
afterAll(async () => {
  // Hier den Server stoppen oder aufräumen
  await app.close(); // Beispiel: Hier wird der Server über die close-Methode geschlossen
});

describe("Points System Tests", () => {
  // Testen des Hinzufügens von Punkten zu einem Benutzer
  it("should add points to a user", async () => {
    const response = await request(app)
      .post("/api/addPoints")
      .send({ username: "testUser", points: 100 });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Points added successfully");
  });

  // Testen des Abziehens von Punkten von einem Benutzer
  it("should subtract points from a user", async () => {
    const response = await request(app)
      .post("/api/subtractPoints")
      .send({ username: "testUser", points: 50 });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Points subtracted successfully");
  });

  // Testen des Abrufs von Punkten für einen Benutzer
  it("should get points for a user", async () => {
    const response = await request(app)
      .get("/api/getPoints")
      .query({ username: "testUser" });

    expect(response.status).toBe(200);
    expect(response.body.points).toBe(50); // Erwartete Punktzahl nach dem Abziehen von 50 Punkten
  });

  // Testen des Vergebens von Trophäen an einen Benutzer
  it("should add achievement to a user", async () => {
    const response = await request(app)
      .post("/api/addAchievement")
      .send({ username: "testUser", achievement: "High Score" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Achievement added successfully");
  });

  // Testen des Entfernens von Trophäen von einem Benutzer
  it("should remove achievement from a user", async () => {
    const response = await request(app)
      .post("/api/removeAchievement")
      .send({ username: "testUser", achievement: "High Score" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Achievement removed successfully");
  });
});
