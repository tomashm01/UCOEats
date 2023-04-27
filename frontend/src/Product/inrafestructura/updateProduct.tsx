import { baseUrl } from "../../config";
import { Product } from "../domain/Product";

export async function updateProduct(product:Product): Promise<Product>{
  const response = await fetch(`${baseUrl}/api/product`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),    
});
    return  await response.json();
}
