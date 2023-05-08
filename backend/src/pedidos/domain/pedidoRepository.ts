import { Pedido } from "./Pedido";


export interface PedidoRepository {
    findAll(): Promise<Pedido[]>;
    findById(id: string): Promise<Pedido>;
    create(pedido: Pedido): Promise<Pedido>;
}