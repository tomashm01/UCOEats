import { baseUrl } from "../../config";
import { Delivery } from "../domain/Delivery";

export async function createDelivery(delivery: Delivery ): Promise<Delivery> {
  const response = await fetch(`${baseUrl}/api/delivery`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(delivery),    
});
    return  await response.json();
}
