import { ProductoRepository ,Producto } from "../domain";

import { PrismaClient } from '@prisma/client'

export class ProductoMysqlController implements ProductoRepository{
    
    private prisma:PrismaClient;
    constructor(){
        this.prisma = new PrismaClient();
    }

    async findById(id:string): Promise<Producto> {
        const dbProduct = await this.prisma.productos.findUnique({
            where: {
                id: id
            }
        });
        if(!dbProduct){
            return null;
        }
        return new Producto(dbProduct.name,dbProduct.price,dbProduct.stock,dbProduct.imageURL,dbProduct.categoryID,dbProduct.id );
    }

    async create(producto:Producto): Promise<Producto>{
        let dbProduct=null;

        try {
            dbProduct= await this.prisma.productos.create({
                data: {
                    ...producto.toDTO()
                }
            });
          } catch (error) {
            if (error.code === 'P2003') {
              console.log('Error de clave foránea: el valor no existe en la tabla referenciada.');
            }
          }
        return new Producto(dbProduct.name,dbProduct.price,dbProduct.stock,dbProduct.imageURL,dbProduct.categoryID,dbProduct.id);

    }

    
    async modify(producto:Producto): Promise<boolean> {
        const data = {
            ...producto.toDTO()
        };
    
        const product= await this.prisma.productos.update({
          where: {id : producto.id},
          data,
        });
        return !!product;
    }
    
    async remove(id:string): Promise<boolean> {
        const prodcuto= await this.prisma.productos.delete({
            where: {
                id: id
            }
        });

        return !!prodcuto;
    }  

    async findAll(): Promise<Producto[]> {
        const productos= await this.prisma.productos.findMany();
        return productos.map((producto)=>  new Producto(producto.name,producto.price,producto.stock,producto.imageURL,producto.categoryID,producto.id));
    }
  
}
