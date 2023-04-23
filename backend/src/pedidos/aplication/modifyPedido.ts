import { PedidoRepository } from '../domain/pedidoRepository';
import { Pedido } from '../domain/pedido';

export class ModifyPedido {

    constructor(private repository: PedidoRepository) { }

    async execute(data:{
        peuid:string;
        quantity: number;
        dateCreation: Date;
        dateDelivery: Date;
        state: string;
        usid: string;
    }):Promise<boolean> {
        const pedido = new Pedido(data.quantity, data.dateCreation, data.dateDelivery, data.state, data.usid,data.peuid);
        return await this.repository.modify(pedido);
    }
}

export default ModifyPedido;