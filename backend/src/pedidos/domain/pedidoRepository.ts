import { Pedido } from './pedido';

export interface PedidoRepository {
    create(pedido: Pedido): Promise<Pedido>;
    modify(pedido: Pedido): Promise<boolean>
    remove(id:string): Promise<boolean>;
    findById(id: string): Promise<Pedido>;
    findAll(): Promise<Pedido[]>;
}