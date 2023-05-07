import { baseUrl } from "../../config";


export async function deleteProduct(id:string): Promise<boolean>{
  const response = await fetch(`${baseUrl}/api/product/${id}`, {
    method: "DELETE",
    });
  return !(response.status === 404) ;
}
