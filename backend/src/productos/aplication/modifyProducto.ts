import { ProductoRepository } from '../domain/productoRepository';
import { Producto } from '../domain/producto';

export class ModifyProducto {

    constructor(private repository: ProductoRepository) { }

    async execute(data:{
        puid: string;
        name: string;
        price: number;
        stock: number;
        cuid: string;
        imagen: string;
    }):Promise<boolean> {
        const producto = new Producto(data.name, data.price, data.stock, data.imagen, data.cuid,data.puid);
        return await this.repository.modify(producto);
    }
}

export default ModifyProducto;