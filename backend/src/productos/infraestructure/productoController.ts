import { ProductoRepository ,Producto } from "../domain";

import { PrismaClient } from '@prisma/client'

import { CreateProducto,ModifyProducto,DeleteProductoById, GetProducto, GetProductos } from "../aplication";

export class ProductoMysqlController implements ProductoRepository{
    
    private prisma:PrismaClient;
    constructor(){
        this.prisma = new PrismaClient();
    }

    async findById(id:string): Promise<Producto> {
        const dbProduct = await this.prisma.productos.findUnique({
            where: {
                puid: id
            }
        });
        if(!dbProduct){
            return null;
        }
        return new Producto(dbProduct.producto,dbProduct.precio,dbProduct.stock,dbProduct.imagen,dbProduct.cuid,dbProduct.puid);
    }

    async create(producto:Producto): Promise<Producto>{
        let dbProduct=null;

        try {
            dbProduct= await this.prisma.productos.create({
                data: {
                    puid        : producto.id,
                    producto    : producto.name,
                    precio   : producto.price,
                    stock       : producto.stock,
                    imagen    : producto.imagen,
                    cuid       : producto.cuid,
                }
            });
          } catch (error) {
            if (error.code === 'P2003') {
              console.log('Error de clave foránea: el valor no existe en la tabla referenciada.');
            }
          }
        return new Producto(dbProduct.producto,dbProduct.precio,dbProduct.stock,dbProduct.imagen,dbProduct.cuid,dbProduct.puid);

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
