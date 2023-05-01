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
                cuid: id
            }
        });
        if(!dbCategory){
            return null;
        }
        return new Categoria(dbCategory.categoria,dbCategory.cuid);
    }

    async create(categoria:Categoria): Promise<Categoria>{
    
        const dbCategory= await this.prisma.categorias.create({
            data: {
                cuid        : categoria.id,
                categoria    : categoria.description,
            }
        });
         
        return new Categoria(dbCategory.categoria,dbCategory.cuid);

    }

    
    async modify(categoria:Categoria): Promise<boolean> {
        const data = {
            cuid      : categoria.id,
            categoria : categoria.description,
        };
    
        const category= await this.prisma.categorias.update({
          where: {cuid : categoria.id},
          data,
        });
        return !!category;
    }
    
    async remove(id:string): Promise<boolean> {
        await this.prisma.productos.deleteMany({
            where: {
                cuid: id
            }
        });
        
        const cateogria= await this.prisma.categorias.delete({
            where: {
                cuid: id
            }
        });

        

        return !!cateogria;
    }  

    async findAll(): Promise<Categoria[]> {
        const categorias= await this.prisma.categorias.findMany();
        return categorias.map((categoria)=> new Categoria(categoria.categoria,categoria.cuid));
    }
  
}
