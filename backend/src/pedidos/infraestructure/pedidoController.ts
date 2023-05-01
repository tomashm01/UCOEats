import { PedidoRepository ,Pedido } from "../domain";

import { PrismaClient } from '@prisma/client'

export class PedidoMysqlController implements PedidoRepository{
    
    private prisma:PrismaClient;
    constructor(){
        this.prisma = new PrismaClient();
    }

    async findById(id:string): Promise<Pedido> {
        const dbDelivery = await this.prisma.pedidos.findUnique({
            where: {
                id: id
            }
        });
        if(!dbDelivery){
            return null;
        }
        return new Pedido(dbDelivery.quantity,dbDelivery.dateCreation,dbDelivery.dateDelivery,dbDelivery.state,dbDelivery.userID,dbDelivery.id);
    }

    async create(pedido:Pedido): Promise<Pedido>{

        const dbDelivery=await this.prisma.pedidos.create({
            data: {
                ...pedido.toDTO()
            }
        });

        return new Pedido(dbDelivery.quantity,dbDelivery.dateCreation,dbDelivery.dateDelivery,dbDelivery.state,dbDelivery.userID,dbDelivery.id);

    }

    
    async modify(pedido:Pedido): Promise<boolean> {
        const data = {
            ...pedido.toDTO()
        };
    
        const product= await this.prisma.pedidos.update({
          where: {id : pedido.id},
          data,
        });
        return !!pedido;
    }
    
    async remove(id:string): Promise<boolean> {
        const pedido= await this.prisma.pedidos.delete({
            where: {
                id: id
            }
        });

        return !!pedido;
    }  

    async findAll(): Promise<Pedido[]> {
        const pedidos= await this.prisma.pedidos.findMany();
        return pedidos.map((pedido)=>  new Pedido(pedido.quantity,pedido.dateCreation,pedido.dateDelivery,pedido.state,pedido.userID,pedido.id));
    }
  
}
