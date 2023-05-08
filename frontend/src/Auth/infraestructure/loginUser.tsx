import { baseUrl } from "../../config";
import { User } from "../domain/user";

interface credentials{
    email:string;
    password:string;
}

export async function login(credentials:credentials): Promise<User|null>{
  const response = await fetch(`${baseUrl}/api/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),    
});
    if(response.status==200){
        const {usuario} = await response.json();
        return usuario;
    }
    return null;
}
