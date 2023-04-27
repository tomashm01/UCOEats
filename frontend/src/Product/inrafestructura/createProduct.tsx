import { baseUrl } from "../../config";
import { Product } from "../domain/Product";

export async function createProduct(product:Product): Promise<Product>{
  const response = await fetch(`${baseUrl}/api/product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),    
});
    return  await response.json();
}
