const request = require("supertest");
const app = require("../server");

describe.skip("Gamification Routes", () => {
  it("should add points to a user", async () => {
    const response = await request(app)
      .post("/gamification/addPoints")
      .send({ username: "ChristianeKrise", points: 100 });

    expect(response.statusCode).toBe(200); // Überprüfe den Statuscode
    expect(response.body).toEqual({ message: "Points added successfully" }); // Überprüfe die gesamte Antwort
  });

  it("should remove points from a user", async () => {
    const response = await request(app)
      .post("/gamification/removePoints")
      .send({ username: "ChristianeKrise", points: 50 });

    expect(response.statusCode).toBe(200); // Überprüfe den Statuscode
    expect(response.body).toEqual({ message: "Points removed successfully" }); // Überprüfe die gesamte Antwort
  });
});
