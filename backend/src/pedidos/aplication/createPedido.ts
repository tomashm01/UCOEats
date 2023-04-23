import { PedidoRepository, Pedido } from "../domain";

export class CreatePedido {
  constructor(private repository: PedidoRepository) {}

  async execute(deliveryData: {
    quantity: number;
    dateCreation: Date;
    dateDelivery: Date;
    state: string;
    usid: string;
  }): Promise<Pedido> {
    const pedido = new Pedido(
      deliveryData.quantity,
      deliveryData.dateCreation,
      deliveryData.dateDelivery,
      deliveryData.state,
      deliveryData.usid
    );
    
    return await this.repository.create(pedido);
  }
}