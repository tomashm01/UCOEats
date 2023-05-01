import { PedidosProducto } from './pedidosProducto';

export interface PedidosProductoRepository {
    create(pedidosProducto:PedidosProducto): Promise<PedidosProducto>;
    modify(pedidosProducto: PedidosProducto): Promise<boolean>
    remove(id:string): Promise<boolean>;
    findById(id: string): Promise<PedidosProducto>;
    findAll(): Promise<PedidosProducto[]>;
}