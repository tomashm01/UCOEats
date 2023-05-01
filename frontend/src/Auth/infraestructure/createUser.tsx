import { baseUrl } from "../../config";
import { User } from "../domain/user";

export async function createUser(user:User): Promise<User>{
  const response = await fetch(`${baseUrl}/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),    
});
    return  await response.json();
}
