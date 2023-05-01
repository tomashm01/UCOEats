import { UsuarioRepository } from "../../usuarios/domain";
import { PedidoRepository, Pedido } from "../domain";

export class CreatePedido {
  constructor(private repository: PedidoRepository,private repositoryUser:UsuarioRepository) {}
  
  async execute(deliveryData: {
    usid: string;
    quantity: number;
    dateCreation: Date;
    dateDelivery: Date;
    state: string;
  }): Promise<Pedido> {

    const user = await this.repositoryUser.findById(deliveryData.usid);
    if(!user) return null;

    const pedido = new Pedido(
      deliveryData.quantity,
      deliveryData.dateCreation,
      deliveryData.dateDelivery,
      deliveryData.state,
      deliveryData.usid,
    );
    return await this.repository.create(pedido);
  }
}