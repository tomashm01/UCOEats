import { ProductoRepository, Producto } from "../domain";
import { CategoriaRepository } from '../../categorias/domain/categoriaRepository';

export class CreateProducto {
  constructor(private repository: ProductoRepository,private repositoryCategoria:CategoriaRepository) {}

  async execute(productData: {
    name: string;
    price: number;
    stock: number;
    idCategory: string;
    image: string;
  }): Promise<Producto> {
    const producto = new Producto(
      productData.name,
      productData.price,
      productData.stock,
      productData.image,
      productData.idCategory
    );
    const category= await this.repositoryCategoria.findById(productData.idCategory);
    if(!category) return null;
    return await this.repository.create(producto);
  }
}
