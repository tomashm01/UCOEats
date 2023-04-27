import { ProductoRepository } from '../domain/productoRepository';
import { Producto } from '../domain/producto';

export class GetProducto {

    constructor(private repository: ProductoRepository) { }

    async execute(id:string):Promise<Producto> {
        return await this.repository.findById(id);
    }
}

export default GetProducto;