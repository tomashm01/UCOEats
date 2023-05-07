import { Pedido } from "./Pedido";


export interface PedidoRepository {
    findAll(): Promise<Pedido[]>;
}