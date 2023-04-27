import { CategoriaRepository } from '../domain/categoriaRepository';
import { Categoria } from '../domain/categoria';

export class GetCategorias {

    constructor(private repository: CategoriaRepository) { }

    async execute():Promise<Categoria[]> {
        return await this.repository.findAll();
    }
}

export default GetCategorias;