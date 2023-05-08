import { Delivery } from "../domain/delivery";
import { baseUrl } from "../../config";

export async function getAllDeliveries(): Promise<Delivery[]> {
    const response = await fetch(`${baseUrl}/api/delivery`);
    const {pedidos} = await response.json();
    return pedidos;
}