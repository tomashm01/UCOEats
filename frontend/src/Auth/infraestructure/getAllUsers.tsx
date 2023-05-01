import { baseUrl } from "../../config";
import { User } from "../domain/user";

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch(`${baseUrl}/user`);
  return await response.json();
}; 