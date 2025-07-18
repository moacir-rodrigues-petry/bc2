import { Request, Response } from "express";
import userController from "../../../controllers/userController";
import userService from "../../../services/userService";

// Mock the userService to avoid generating random data during tests
jest.mock("../../../services/userService", () => ({
  generateUsers: jest.fn(),
}));

describe("UserController", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObject: any = {};

  beforeEach(() => {
    // Reset mock data
    responseObject = {
      statusCode: 0,
      json: null,
    };

    // Setup mock request and response
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockImplementation((code) => {
        responseObject.statusCode = code;
        return mockResponse;
      }),
      json: jest.fn().mockImplementation((data) => {
        responseObject.json = data;
        return mockResponse;
      }),
    };

    // Clear mock calls
    jest.clearAllMocks();
  });

  describe("getUsers", () => {
    it("should return 200 status code and array of users", () => {
      // Mock data
      const mockUsers = [
        {
          id: "1",
          name: "John Doe",
          username: "john",
          email: "john@example.com",
          role: "admin",
        },
        {
          id: "2",
          name: "Jane Smith",
          username: "jane",
          email: "jane@example.com",
          role: "user",
        },
      ];

      // Setup mock implementation
      (userService.generateUsers as jest.Mock).mockReturnValue(mockUsers);

      // Call the controller method
      userController.getUsers(mockRequest as Request, mockResponse as Response);

      // Assertions
      expect(userService.generateUsers).toHaveBeenCalledWith(10);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUsers);
      expect(responseObject.statusCode).toBe(200);
      expect(responseObject.json).toEqual(mockUsers);
    });

    it("should handle errors and return 500 status code", () => {
      // Setup mock to throw an error
      (userService.generateUsers as jest.Mock).mockImplementation(() => {
        throw new Error("Test error");
      });

      // Spy on console.error to avoid polluting test output
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      // Call the controller method
      userController.getUsers(mockRequest as Request, mockResponse as Response);

      // Assertions
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: "Internal server error",
      });
      expect(responseObject.statusCode).toBe(500);
      expect(responseObject.json).toEqual({ error: "Internal server error" });
      expect(consoleErrorSpy).toHaveBeenCalled();

      // Restore console.error
      consoleErrorSpy.mockRestore();
    });
  });
});
