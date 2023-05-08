import { Delivery } from "../domain/delivery";
import { baseUrl } from "../../config";

interface deliveryCreateResponse {
    pedido: Delivery;
}

export async function createDelivery(deliveryData:deliveryCreateResponse): Promise<Delivery>{
    const response = await fetch(`${baseUrl}/api/delivery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deliveryData),    
  });
      const {delivery} = await response.json();
      return  delivery;
  }
  