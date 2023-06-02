import { baseUrl } from "../../config";
import { registerUser } from "../domain/registerUser";
import { User } from "../domain/user";

export async function createUser(user:registerUser): Promise<User|null>{
  const response = await fetch(`${baseUrl}/api/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),    
});
    const responseJSON = await response.json();
    if( ! responseJSON.ok){
        return null;
    }
      return responseJSON.usuario;
}
