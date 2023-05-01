import { CategoriaRepository ,Categoria } from "../domain";

import { PrismaClient } from '@prisma/client'

export class CategoriaMysqlController implements CategoriaRepository{
    
    private prisma:PrismaClient;
    constructor(){
        this.prisma = new PrismaClient();
    }

    async findById(id:string): Promise<Categoria> {
        const dbCategory = await this.prisma.categorias.findUnique({
            where: {
                id: id
            }
        });
        if(!dbCategory){
            return null;
        }
        return new Categoria(dbCategory.description,dbCategory.id);
    }

    async create(categoria:Categoria): Promise<Categoria>{
    
        const dbCategory= await this.prisma.categorias.create({
            data: {
                ...categoria.toDTO()
            }
        });
         
        return new Categoria(dbCategory.description,dbCategory.id);

    }

    
    async modify(categoria:Categoria): Promise<boolean> {
        const data = {
            ...categoria.toDTO()
        };
    
        const category= await this.prisma.categorias.update({
          where: {id : categoria.id},
          data,
        });
        return !!category;
    }
    
    async remove(id:string): Promise<boolean> {
        await this.prisma.productos.deleteMany({
            where: {
                id: id
            }
        });
        
        const cateogria= await this.prisma.categorias.delete({
            where: {
                id: id
            }
        });

        

        return !!cateogria;
    }  

    async findAll(): Promise<Categoria[]> {
        const categorias= await this.prisma.categorias.findMany();
        return categorias.map((categoria)=> new Categoria(categoria.description,categoria.id));
    }
  
}
