import { baseUrl } from "../../config";
import Category from "../domain/Category";

interface CategoryDescription{
  description:string;
}

export async function createCategory(description:string): Promise<Category>{
  const category : CategoryDescription = {description};
  const response = await fetch(`${baseUrl}/api/category`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(category),    
});
   const responseJSON = await (response.json());
   return responseJSON.category;
}