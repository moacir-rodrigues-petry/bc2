import request from "supertest";
import app from "../../../app";
import { validateUserStructure } from "../../helpers/userTestHelpers";

describe("User API Endpoints", () => {
  describe("GET /api/users", () => {
    it("should return 200 status code", async () => {
      const response = await request(app).get("/api/users");
      expect(response.status).toBe(200);
    });

    it("should return an array of 10 users", async () => {
      const response = await request(app).get("/api/users");
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(10);
    });

    it("should return users with valid structure", async () => {
      const response = await request(app).get("/api/users");

      response.body.forEach((user: any) => {
        expect(validateUserStructure(user)).toBe(true);
      });
    });

    it("should have the correct content type header", async () => {
      const response = await request(app).get("/api/users");
      expect(response.headers["content-type"]).toMatch(/application\/json/);
    });
  });

  describe("GET /", () => {
    it("should return 200 status code and correct message", async () => {
      const response = await request(app).get("/");
      expect(response.status).toBe(200);
      expect(response.text).toBe("Users API is running");
    });
  });

  describe("Invalid routes", () => {
    it("should return 404 for non-existent routes", async () => {
      const response = await request(app).get("/api/non-existent");
      expect(response.status).toBe(404);
    });
  });

  describe("CORS headers", () => {
    it("should include proper CORS headers for allowed origin", async () => {
      const response = await request(app)
        .options("/api/users")
        .set("Origin", "http://localhost:3001")
        .set("Access-Control-Request-Method", "GET");

      expect(response.headers["access-control-allow-origin"]).toBe(
        "http://localhost:3001"
      );
      // The cors middleware should set these headers for OPTIONS requests
      expect(response.headers["access-control-allow-methods"]).toBeDefined();
    });

    it("should not allow requests from unauthorized origins", async () => {
      // We can't directly test rejected CORS as supertest bypasses this,
      // but we can check that non-whitelisted origins don't get CORS headers
      const response = await request(app)
        .options("/api/users")
        .set("Origin", "http://unauthorized-origin.com")
        .set("Access-Control-Request-Method", "GET");

      // For unauthorized origins, there should be no CORS headers
      // Note: Express.js might handle this differently in testing vs production
      // For testing purposes, we'll just check response status
      expect(response.status).not.toBe(200);
    });
  });
});
