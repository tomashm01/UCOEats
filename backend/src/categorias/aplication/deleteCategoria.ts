import { CategoriaRepository } from '../domain/categoriaRepository';

export class DeleteCategoriaById {

    constructor(private repository: CategoriaRepository) { }

    async execute(id: string): Promise<boolean> {
        const categoria = await this.repository.findById(id);
        if (!categoria) throw new Error("Categoria no encontrado");
        return await this.repository.remove(id);
    }
}

export default DeleteCategoriaById;