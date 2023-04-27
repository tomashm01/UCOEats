import { baseUrl } from "../../config";
import { User } from "../domain/user";

export async function deleteUser(id:string):Promise<boolean>{
  const response = await fetch(`${baseUrl}/user/${id}`, {
    method: "DELETE",
  });
  return !(response.status === 404) 
}