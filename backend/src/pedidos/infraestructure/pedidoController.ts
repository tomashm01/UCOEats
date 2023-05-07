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
        const pedidos = await this.prisma.pedidosProducto.findMany({
            select: {
              id: true,
              quantity: true,
              price: true,
              productos: {
                select: {
                  id: true,
                  name: true,
                  imageURL: true,
                  categorias:true
                },
              },
              pedidos: {
                select: {
                  id: true,
                  quantity: true,
                  dateCreation: true,
                  dateDelivery: true,
                  state: true,
                  usuarios: {
                    select: {
                      id: true
                    },
                  },
                },
              },
            },
          });

        console.log(pedidos.forEach(function(pedido){
            console.log(pedido);
        }));
        return null;
        //return pedidos.map((pedido)=>  new Pedido(pedido.quantity,pedido.dateCreation,pedido.dateDelivery,pedido.state,pedido.userID,pedido.id));
    }
  
}
