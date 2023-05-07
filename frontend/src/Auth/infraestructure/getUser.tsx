import { baseUrl } from "../../config";
import { User } from "../domain/user";

export async function getUser  (id: string): Promise<User | null> {
  const response = await fetch(`${baseUrl}/api/user/${id}`);
  if (response.status === 404) {
      return null;
  }
  return (await response.json()).usuario;
}
