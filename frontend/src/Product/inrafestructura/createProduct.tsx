import { baseUrl } from "../../config";
import { Product } from "../domain/Product";
import productData from "../domain/ProductData";

export async function createProduct(product:productData): Promise<Product>{
  const response = await fetch(`${baseUrl}/api/product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),    
});
    return  await response.json();
}
