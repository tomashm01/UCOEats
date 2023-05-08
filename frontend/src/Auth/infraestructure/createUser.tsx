import { baseUrl } from "../../config";
import { registerUser } from "../domain/registerUser";
import { User } from "../domain/user";

export async function createUser(user:registerUser): Promise<User>{
  const response = await fetch(`${baseUrl}/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),    
});
    const {usuario} = await response.json();
    return  usuario;
}
