import { Delivery } from "../domain/delivery";
import { baseUrl } from "../../config";



export async function createDelivery(deliveryData:Delivery): Promise<Delivery>{
    const response = await fetch(`${baseUrl}/api/delivery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deliveryData),    
  });
      const {delivery} = await response.json();
      return  delivery;
  }
  