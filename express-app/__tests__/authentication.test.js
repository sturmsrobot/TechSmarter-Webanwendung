const request = require("supertest");
const app = require("../server");

describe.skip("Authentication Tests", () => {
  it("should return 200 status code when user is authenticated", async () => {
    const loginResponse = await request(app)
      .post("/api/login")
      .send({ username: "testuser", password: "password" });

    const token = loginResponse.body.token;

    const res = await request(app)
      .get("/api/protected")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
  });

  it("should return 403 status code when no token is provided", async () => {
    const res = await request(app).get("/api/protected");
    expect(res.statusCode).toEqual(403);
  });

  it("should return 401 status code when invalid token is provided", async () => {
    const res = await request(app)
      .get("/api/protected")
      .set("Authorization", "Bearer invalidtoken");

    expect(res.statusCode).toEqual(401);
  });
});
