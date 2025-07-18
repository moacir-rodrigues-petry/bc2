import userService from "../../../services/userService";
import {
  validateUserStructure,
  isValidRole,
} from "../../helpers/userTestHelpers";

describe("UserService", () => {
  describe("generateUsers", () => {
    it("should generate the specified number of users", () => {
      // Test with different user counts
      const testCounts = [0, 1, 5, 10, 20];

      testCounts.forEach((count) => {
        const users = userService.generateUsers(count);
        expect(users).toHaveLength(count);
      });
    });

    it("should generate users with valid structure", () => {
      const users = userService.generateUsers(10);

      users.forEach((user) => {
        // Check if all required fields exist with correct types
        expect(validateUserStructure(user)).toBe(true);

        // Check if UUID format is valid (basic check)
        expect(user.id).toMatch(
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
        );

        // Check if email format is valid (basic check)
        expect(user.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

        // Check if role is one of the allowed values
        expect(isValidRole(user.role)).toBe(true);
      });
    });

    it("should generate unique users", () => {
      const users = userService.generateUsers(100);
      const userIds = users.map((user) => user.id);
      const uniqueIds = new Set(userIds);

      // All IDs should be unique
      expect(uniqueIds.size).toBe(users.length);

      // Check for unique emails as well
      const userEmails = users.map((user) => user.email);
      const uniqueEmails = new Set(userEmails);
      expect(uniqueEmails.size).toBe(users.length);
    });
  });
});
