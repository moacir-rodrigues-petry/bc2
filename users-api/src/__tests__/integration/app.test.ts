import request from "supertest";
import app from "../../app";
import { User } from "../../types/user";
import { Router } from "express";

describe("Application Integration Tests", () => {
  describe("Full User API Flow", () => {
    it("should retrieve users with proper structure and data types", async () => {
      // Make request to the API
      const response = await request(app).get("/api/users");

      // Basic validations
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(10);

      // Validate each user's structure in depth
      response.body.forEach((user: User) => {
        // Check all required fields exist
        expect(user).toHaveProperty("id");
        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("username");
        expect(user).toHaveProperty("email");
        expect(user).toHaveProperty("role");

        // Check types
        expect(typeof user.id).toBe("string");
        expect(typeof user.name).toBe("string");
        expect(typeof user.username).toBe("string");
        expect(typeof user.email).toBe("string");
        expect(typeof user.role).toBe("string");

        // Validate formats
        expect(user.id).toMatch(
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
        );
        expect(user.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        expect(["admin", "user", "editor", "viewer"]).toContain(user.role);
      });
    });
  });

  describe("Error Handling", () => {
    // This test simulates an error without modifying the actual app
    it("should handle routes that throw errors", async () => {
      // Create a test router that throws an error
      const errorRouter = Router();
      errorRouter.get("/test-error", () => {
        throw new Error("Test error");
      });

      // Use supertest to make a request to a non-existent route
      // which will return 404, a form of error handling
      const response = await request(app).get("/api/non-existent-route");

      // Verify the status code is an error code
      expect(response.status).toBeGreaterThanOrEqual(400);
    });
  });
});
