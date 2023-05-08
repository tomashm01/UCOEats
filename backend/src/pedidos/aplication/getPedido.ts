import { PedidoRepository } from '../domain/pedidoRepository';
import {Pedido}  from '../domain/Pedido';

export class GetPedido {

    constructor(private repository: PedidoRepository) { }

    async execute(id:string):Promise<Pedido> {
        return await this.repository.findById(id);
    }
}

export default GetPedido;