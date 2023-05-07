import { PedidoRepository } from '../domain/pedidoRepository';
import {Pedido}  from '../domain/Pedido';

export class GetPedidos {

    constructor(private repository: PedidoRepository) { }

    async execute():Promise<Pedido[]> {
        return await this.repository.findAll();
    }
}

export default GetPedidos;