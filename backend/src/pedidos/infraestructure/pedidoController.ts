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
        let dbDelivery=null;

        try {
            dbDelivery= await this.prisma.pedidos.create({
                data: {
                    importe        : pedido.quantity,
                    fcreacion    : pedido.dataCreation,
                    fentrega   : pedido.dataDelivery,
                    estado       : pedido.state,
                    peuid       : pedido.id,
                    usid        : pedido.usid,
                }
            });
          } catch (error) {
            if (error.code === 'P2003') {
              console.log('Error de clave foránea: el valor no existe en la tabla referenciada.');
            }
          }
        return new Pedido(dbDelivery.importe,dbDelivery.fcreacion,dbDelivery.fentrega,dbDelivery.estado,dbDelivery.usid,dbDelivery.peuid);

    }

    
    async modify(producto:Producto): Promise<boolean> {
        const data = {
            producto      : producto.name,
            precio   : producto.price,
            stock       : producto.stock,
            cuid    : producto.cuid,
            imagen        : producto.imagen,
        };
    
        const product= await this.prisma.productos.update({
          where: {puid : producto.id},
          data,
        });
        return !!product;
    }
    
    async remove(id:string): Promise<boolean> {
        const prodcuto= await this.prisma.productos.delete({
            where: {
                puid: id
            }
        });

        return !!prodcuto;
    }  

    async findAll(): Promise<Producto[]> {
        const productos= await this.prisma.productos.findMany();
        return productos.map((producto)=> new Producto(producto.producto,producto.precio,producto.stock,producto.imagen,producto.cuid,producto.puid));
    }
  
}
