import { baseUrl } from "../../config";
import { Product } from "../domain/Product";

export async function getProduct(id:string): Promise<Product | null >{
  const response = await fetch(`${baseUrl}/api/products/${id}`);
 if (response.status === 404) {
    return null;
 }

  return response.json();
};
