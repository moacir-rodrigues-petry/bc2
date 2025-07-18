import { User } from "../../types/user";

export const validateUserStructure = (user: User): boolean => {
  return (
    typeof user.id === "string" &&
    typeof user.name === "string" &&
    typeof user.username === "string" &&
    typeof user.email === "string" &&
    typeof user.role === "string"
  );
};

export const VALID_USER_ROLES = ["admin", "user", "editor", "viewer"];

export const isValidRole = (role: string): boolean => {
  return VALID_USER_ROLES.includes(role);
};
