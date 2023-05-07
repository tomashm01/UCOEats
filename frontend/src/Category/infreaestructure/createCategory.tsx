import { baseUrl } from "../../config";
import Category from "../domain/Category";

export async function createCategory(description:string): Promise<Category>{
  const response = await fetch(`${baseUrl}/api/category`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(description),    
});
    return  await (response.json());
}
