import { CategoriaRepository } from '../domain/categoriaRepository';
import { Categoria } from '../domain/categoria';

export class ModifyCategoria{

    constructor(private repository: CategoriaRepository) { }

    async execute(data:{
        id: string;
        description:string;
    }):Promise<boolean> {
        const categoria = new Categoria(data.description, data.id);
        return await this.repository.modify(categoria);
    }
}

export default ModifyCategoria;