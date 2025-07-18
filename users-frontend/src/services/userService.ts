import axios from "axios";
import type { User } from "../types/User";

const API_URL = "http://localhost:3000/api/users";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
