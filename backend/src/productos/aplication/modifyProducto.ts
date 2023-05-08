import { ProductoRepository } from '../domain/productoRepository';
import { Producto } from '../domain/producto';

export class ModifyProducto {

    constructor(private repository: ProductoRepository) { }

    async execute(data:{
        id: string;
        name: string;
        price: number;
        stock: number;
        categoryID: string;
        imageURL: string;
    }):Promise<boolean> {
        const producto = new Producto(data.name, data.price, data.stock, data.imageURL, data.categoryID,data.id);
        return await this.repository.modify(producto);
    }
}

export default ModifyProducto;