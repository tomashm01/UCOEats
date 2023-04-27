import { ProductoRepository } from '../domain/productoRepository';
import { Producto } from '../domain/producto';

export class GetProductos {

    constructor(private repository: ProductoRepository) { }

    async execute():Promise<Producto[]> {
        return await this.repository.findAll();
    }
}

export default GetProductos;