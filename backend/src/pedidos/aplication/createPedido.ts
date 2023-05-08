import { PedidoRepository } from '../domain/pedidoRepository';
import {Pedido}  from '../domain/Pedido';
import { v4 as uuidv4, validate } from 'uuid';
import { UsuarioPedido, pedidosProductos } from '../domain/interfaces';
import { NotNegative } from '../../productos/domain/NotNegative';
import { Email } from '../../usuarios/domain/Email';
import { Phone } from '../../usuarios/domain/Phone';

export class CreatePedido{

    constructor(private repository: PedidoRepository) { }

    async execute(delivery):Promise<Pedido> {

        const pedido = new Pedido(
            uuidv4(),
            delivery.pedido.usuarios,
            delivery.pedido.quantity,
            delivery.pedido.dateCreation,
            delivery.pedido.dateDelivery,
            delivery.pedido.state,
            delivery.pedido.productos
        ); 
        const pedidoCreado=await this.repository.create(pedido);
        if(!pedidoCreado) return null;

        return await this.repository.findById(pedidoCreado.id);
    }
}

export default CreatePedido;