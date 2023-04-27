import { baseUrl } from "../../config";


export async function deleteProduct(id:number): Promise<boolean>{
  const response = await fetch(`${baseUrl}/api/products/${id}`, {
    method: "DELETE",
    });
  return !(response.status === 404) ;
}
