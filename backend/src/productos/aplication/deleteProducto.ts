import { ProductoRepository } from '../domain/productoRepository';

export class DeleteProductoById {

    constructor(private repository: ProductoRepository) { }

    async execute(id: string): Promise<boolean> {
        const producto = await this.repository.findById(id);
        if (!producto) throw new Error("Producto no encontrado");
        return await this.repository.remove(id);
    }
}

export default DeleteProductoById;