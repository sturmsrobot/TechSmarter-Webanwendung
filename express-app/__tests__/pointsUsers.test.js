const request = require("supertest");
const app = require("../server");
const jwt = require("jsonwebtoken");

describe.skip("Points System Tests", () => {
  // Testen des Hinzufügens von Punkten zu einem Benutzer
  it("should add points to a user", async () => {
    // Erstelle einen gültigen JWT-Token für einen Benutzer
    const token = jwt.sign({ userId: "testUserId" }, process.env.JWT_SECRET);

    // Füge den Token dem Authorization-Header der Anfrage hinzu
    const response = await request(app)
      .post("/api/addPoints")
      .set("Authorization", `Bearer ${token}`)
      .send({ username: "testUser", points: 100 });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Points added successfully");
  });

  // Testen des Abziehens von Punkten von einem Benutzer
  it("should subtract points from a user", async () => {
    // Erstelle einen gültigen JWT-Token für einen Benutzer
    const token = jwt.sign({ userId: "testUserId" }, process.env.JWT_SECRET);

    // Füge den Token dem Authorization-Header der Anfrage hinzu
    const response = await request(app)
      .post("/api/subtractPoints")
      .set("Authorization", `Bearer ${token}`)
      .send({ username: "testUser", points: 50 });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Points subtracted successfully");
  });

  // Testen des Abrufs von Punkten für einen Benutzer
  it("should get points for a user", async () => {
    // Erstelle einen gültigen JWT-Token für einen Benutzer
    const token = jwt.sign({ userId: "testUserId" }, process.env.JWT_SECRET);

    // Füge den Token dem Authorization-Header der Anfrage hinzu
    const response = await request(app)
      .get("/api/getPoints")
      .query({ username: "testUser" })
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(401);
    expect(response.body.points).toBe(50); // Erwartete Punktzahl nach dem Abziehen von 50 Punkten
  });

  // Testen des Vergebens von Trophäen an einen Benutzer
  it("should add achievement to a user", async () => {
    // Erstelle einen gültigen JWT-Token für einen Benutzer
    const token = jwt.sign(
      { userId: "ChristianeKrise" },
      process.env.JWT_SECRET
    );

    // Füge den Token dem Authorization-Header der Anfrage hinzu
    const response = await request(app)
      .post("/api/addAchievement")
      .set("Authorization", `Bearer ${token}`)
      .send({ username: "testUser", achievement: "High Score" });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Achievement added successfully");
  });

  // Testen des Entfernens von Trophäen von einem Benutzer
  it("should remove achievement from a user", async () => {
    // Erstelle einen gültigen JWT-Token für einen Benutzer
    const token = jwt.sign({ userId: "testUserId" }, process.env.JWT_SECRET);

    // Füge den Token dem Authorization-Header der Anfrage hinzu
    const response = await request(app)
      .post("/api/removeAchievement")
      .set("Authorization", `Bearer ${token}`)
      .send({ username: "testUser", achievement: "High Score" });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Achievement removed successfully");
  });
});
