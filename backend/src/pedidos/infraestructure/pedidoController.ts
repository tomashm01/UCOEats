import { PedidoRepository ,Pedido } from "../domain";

import { PrismaClient } from '@prisma/client'

import { CreatePedido,ModifyPedido,DeletePedidoById, GetPedido, GetPedidos } from "../aplication";

export class PedidoMysqlController implements PedidoRepository{
    
    private prisma:PrismaClient;
    constructor(){
        this.prisma = new PrismaClient();
    }

    async findById(id:string): Promise<Pedido> {
        const dbDelivery = await this.prisma.pedidos.findUnique({
            where: {
                peuid: id
            }
        });
        if(!dbDelivery){
            return null;
        }
        return new Pedido(dbDelivery.importe,dbDelivery.fcreacion,dbDelivery.fentrega,dbDelivery.estado,dbDelivery.usid,dbDelivery.peuid);
    }

    async create(pedido:Pedido): Promise<Pedido>{
        const dateString = pedido.dataCreation;
        const dateObject = new Date(dateString);
        const dateObject2 = new Date(pedido.dataDelivery);
        let dbDelivery=null;
        try {
            // Código que puede lanzar una excepción
            dbDelivery= await this.prisma.pedidos.create({
                data: {
                    peuid    :  pedido.id,
                    usid        : pedido.usid,
                    importe        : pedido.quantity,
                    fcreacion    : dateObject,
                    fentrega   :dateObject2,
                    estado       : pedido.state,
                }
            });
          } catch (error) {
            if (error.code === 'P2003') {
              console.log('El id del usuario no existe.');
            } else {
              console.log(`Se ha producido un error: ${error.message}`);
            }
          }
        
        return new Pedido(dbDelivery.importe,dbDelivery.fcreacion,dbDelivery.fentrega,dbDelivery.estado,dbDelivery.usid,dbDelivery.peuid);

    }

    
    async modify(pedido:Pedido): Promise<boolean> {
        const dateString = pedido.dataCreation;
        const dateObject = new Date(dateString);
        const dateObject2 = new Date(pedido.dataDelivery);
        const data = {
            usid      : pedido.usid,
            importe   : pedido.quantity,
            fentrega       : dateObject,
            fcreacion    : dateObject2,
            estado        : pedido.state,
        };
    
        const product= await this.prisma.pedidos.update({
          where: {peuid : pedido.id},
          data,
        });
        return !!pedido;
    }
    
    async remove(id:string): Promise<boolean> {
        const pedido= await this.prisma.pedidos.delete({
            where: {
                peuid: id
            }
        });

        return !!pedido;
    }  

    async findAll(): Promise<Pedido[]> {
        const pedidos= await this.prisma.pedidos.findMany();
        return pedidos.map((pedido)=> new Pedido(pedido.importe,pedido.fcreacion,pedido.fentrega,pedido.estado,pedido.usid,pedido.peuid));
    }
  
}
