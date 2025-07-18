import { Request, Response } from "express";
import userService from "../services/userService";

class UserController {
  getUsers(req: Request, res: Response): void {
    try {
      const users = userService.generateUsers(10);
      res.status(200).json(users);
    } catch (error) {
      console.error("Error generating users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new UserController();
