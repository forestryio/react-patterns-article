import { User } from "./user";

export async function loadUser(email: string): Promise<User> {
  return {
    firstName: "bob",
    lastName: "loblaw",
    email: "bob@example.com"
  };
}
