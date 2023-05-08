import { Delivery } from "../domain/delivery";
import { baseUrl } from "../../config";

export async function getAllDeliveries(): Promise<Delivery[]> {
    const response = await fetch(`${baseUrl}/api/delivery`);
    return await response.json();
}