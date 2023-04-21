import { Producto } from './producto';

export interface ProductoRepository {
    create(producto: Producto): Promise<Producto>;
    modify(prodcuto: Producto): Promise<boolean>
    remove(id:string): Promise<boolean>;
    findById(id: string): Promise<Producto>;
    findAll(): Promise<Producto[]>;
}