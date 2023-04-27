import { Categoria } from './categoria';

export interface CategoriaRepository {
    create(categoria: Categoria): Promise<Categoria>;
    modify(categoria: Categoria): Promise<boolean>
    remove(id:string): Promise<boolean>;
    findById(id: string): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
}