import {Pedido} from "../../pedidos/domain/Pedido";
import { PedidoRepository, pedidosProductos  } from "../domain";

import { PrismaClient } from '@prisma/client'
import ProductoPedido, { UsuarioPedido } from "../../pedidos/domain/interfaces";
import { Email } from "../../usuarios/domain/Email";
import { Phone } from "../../usuarios/domain/Phone";
import { NotNegative } from "../../productos/domain/NotNegative";
import { TypeDelivery } from "../../pedidos/domain/TypeDelivery";
import * as uuid from 'uuid';


export class PedidoMysqlController implements PedidoRepository{
    
    private prisma:PrismaClient;
    constructor(){
        this.prisma = new PrismaClient();
    }

    async findById(id: string): Promise<Pedido> {
      const pedido = await this.prisma.pedidos.findUnique({
        select: {
          id:true,
          usuarios:{
            select:{
              id:true,
              name:true,
              surname:true,
              email:true,
              phone:true
            }
          },
          quantity: true,
          dateCreation: true,
          dateDelivery: true,
          state: true,
          pedidosProducto: {
            select: {
              id:true,
              quantity: true,
              price: true,
              productos:{
                select:{
                  id:true,
                  name:true
                }
              }
            }
          },
        },
        where:{
          id:id
        }
      });

      if(!pedido) return null;

      const usuario:UsuarioPedido = {
        id: pedido.usuarios.id,
        name: pedido.usuarios.name,
        surname: pedido.usuarios.surname,
        email: new Email(pedido.usuarios.email),
        phone: new Phone(pedido.usuarios.phone),
      };

      const productos: pedidosProductos[] = pedido.pedidosProducto.map((pp) => {
        const producto: ProductoPedido = {
          id: pp.productos.id,
          name: pp.productos.name,
        };

        return {
          quantity: new NotNegative(pp.quantity),
          price: new NotNegative(pp.price),
          id: pp.id,
          producto: producto,
        };
      });

      return new Pedido(
        pedido.id,
        usuario,
        pedido.quantity,
        pedido.dateCreation,
        pedido.dateDelivery,
        pedido.state as TypeDelivery,
        productos
      );
    }

    async findAll(): Promise<Pedido[]> {
      const pedidos = await this.prisma.pedidos.findMany({
        select: {
          id:true,
          usuarios:{
            select:{
              id:true,
              name:true,
              surname:true,
              email:true,
              phone:true
            }
          },
          quantity: true,
          dateCreation: true,
          dateDelivery: true,
          state: true,
          pedidosProducto: {
            select: {
              id:true,
              quantity: true,
              price: true,
              productos:{
                select:{
                  id:true,
                  name:true
                }
              }
            }
          },
        },
      });
      return pedidos.map((pedido) => {
        const usuario: UsuarioPedido = {
          id: pedido.usuarios.id,
          name: pedido.usuarios.name,
          surname: pedido.usuarios.surname,
          email: new Email(pedido.usuarios.email),
          phone: new Phone(pedido.usuarios.phone),
        };
    
        const productos: pedidosProductos[] = pedido.pedidosProducto.map((pp) => {
          const producto: ProductoPedido = {
            id: pp.productos.id,
            name: pp.productos.name,
          };
    
          return {
            quantity: new NotNegative(pp.quantity),
            price: new NotNegative(pp.price),
            id: pp.id,
            producto: producto,
          };
        });
    
        return new Pedido(
          pedido.id,
          usuario,
          pedido.quantity,
          pedido.dateCreation,                                                
          pedido.dateDelivery,
          pedido.state as TypeDelivery,
          productos
        );
      });
    }

    async create(pedido): Promise<Pedido> {

      const pedidoCreated = await this.prisma.pedidos.create({
        data:{
          id:pedido.id,
          quantity:pedido.quantity.getValue(),
          dateCreation:pedido.dateCreation,
          dateDelivery:pedido.dateDelivery,
          state:pedido.state,
          userID:pedido.usuarios.id,
        }
      });

      const pedidosProductos = await this.prisma.pedidosProducto.createMany({
        data:pedido.productos.map((pp) => {
          return {
            id:uuid.v4(),
            quantity:pp.quantity,
            price:pp.price,
            deliveryID:pedido.id,
            productID:pp.productos.id,
          }
        })
      });

      if(!pedidoCreated && !pedidosProductos) return null;

      return pedido;

    }
  
}
