import { CategoriaRepository } from '../domain/categoriaRepository';
import { Categoria } from '../domain/categoria';

export class ModifyCategoria{

    constructor(private repository: CategoriaRepository) { }

    async execute(data:{
        cuid: string;
        description:string;
    }):Promise<boolean> {
        const categoria = new Categoria(data.description, data.cuid);
        return await this.repository.modify(categoria);
    }
}

export default ModifyCategoria;