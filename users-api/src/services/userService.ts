import { faker } from "@faker-js/faker";
import { User } from "../types/user";

class UserService {
  generateUsers(count: number): User[] {
    const users: User[] = [];

    for (let i = 0; i < count; i++) {
      const user: User = {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        role: faker.helpers.arrayElement(["admin", "user", "editor", "viewer"]),
      };

      users.push(user);
    }

    return users;
  }
}

export default new UserService();
