import { CategoriaRepository } from '../domain/categoriaRepository';
import { Categoria } from '../domain/categoria';

export class GetCategoria {

    constructor(private repository: CategoriaRepository) { }

    async execute(id:string):Promise<Categoria> {
        return await this.repository.findById(id);
    }
}

export default GetCategoria;