import { baseUrl } from "../../config";
import Category from "../domain/Category";


export async function getAllCategories(): Promise<Category[]> {
    const response = await fetch(`${baseUrl}/api/category`);
    return await response.json();
}