import { PedidoRepository } from '../domain/pedidoRepository';

export class DeletePedidoById {

    constructor(private repository: PedidoRepository) { }

    async execute(id: string): Promise<boolean> {
        const pedido = await this.repository.findById(id);
        if (!pedido) throw new Error("Pedido no encontrado");
        return await this.repository.remove(id);
    }
}

export default DeletePedidoById;