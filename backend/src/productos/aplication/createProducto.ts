import { ProductoRepository, Producto } from "../domain";

export class CreateProducto {
  constructor(private repository: ProductoRepository) {}

  async execute(productData: {
    name: string;
    price: number;
    stock: number;
    //cuid string o tipo uiid?
    cuid: string;
    imagen: string;
  }): Promise<Producto> {
    const producto = new Producto(
      productData.name,
      productData.price,
      productData.stock,
      productData.cuid,
      productData.imagen
    );
    
    return await this.repository.create(producto);
  }
}
