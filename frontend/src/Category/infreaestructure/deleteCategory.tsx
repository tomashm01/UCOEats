import { baseUrl } from "../../config";


export async function deleteCategory(id:string): Promise<boolean>{
  const response = await fetch(`${baseUrl}/api/category/${id}`, {
    method: "DELETE",
    });
  return (response.status === 200) ;
}
