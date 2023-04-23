import { CategoriaRepository, Categoria } from "../domain";

export class CreateCategoria {
  constructor(private repository: CategoriaRepository) {}

  async execute(categoryData: {
    description:string;
  }): Promise<Categoria> {
    const categoria = new Categoria(
      categoryData.description
    );
    return await this.repository.create(categoria);
  }
}
