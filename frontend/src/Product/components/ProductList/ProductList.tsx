import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../domain/Product";
import { getAllProducts } from "../../inrafestructura/getAllProduct";
import { useEffect, useState } from "react";
import { useBasket } from "../../../Basket/providers/BasketContext";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const { addProduct, removeProduct } = useBasket();

  useEffect(() => {
    //recoger de forma asincrona el getAllProducts())
    const fetchProductos = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProductos();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-10">
      {products.map((product: Product, index: number) => (
        <ProductCard key={index} product={product} addProduct={addProduct} />
      ))}
    </div>
  );
}
