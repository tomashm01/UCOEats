import { baseUrl } from "../../config";
import Category from "../domain/Category";


export async function getCategory(id:string): Promise<Category | null >{
  const response = await fetch(`${baseUrl}/api/category/${id}`);
 if (response.status === 404) {
    return null;
 }

  return response.json();
};
