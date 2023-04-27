import { baseUrl } from "../../config";
import { Product } from "../domain/Product";

export async function getAllProducts(): Promise<Product[]> {
    const response = await fetch(`${baseUrl}/api/product`);
    return await response.json();
}