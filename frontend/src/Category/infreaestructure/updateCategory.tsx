import { baseUrl } from "../../config";
import Category from "../domain/Category";

export async function updateCategory(category:Category): Promise<Category>{
  const response = await fetch(`${baseUrl}/api/category`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(category),    
});
    return  await response.json();
}
