import { baseUrl } from "../../config";
import { Product } from "../domain/Product";

export async function getProduct(id:string): Promise<Product | null >{
  const response = await fetch(`${baseUrl}/api/product/${id}`);
 if (response.status === 404) {
    return null;
 }
 const {producto} = await response.json();
  return (producto);
};
