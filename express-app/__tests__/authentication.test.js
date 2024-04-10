const request = require("supertest"); // Supertest zum Testen von Express-Endpunkten
const app = require("../server"); // Import von express-app

describe("Authentication Tests", () => {
  it("should return 200 status code when user is authenticated", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({ username: "testuser", password: "password" });
    expect(res.statusCode).toEqual(200);
  });
});
