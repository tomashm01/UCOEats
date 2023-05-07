import { useEffect, useState } from "react";
import { getAllProducts } from "../../inrafestructura/getAllProduct";
import AddProduct from "../AddProduct/AddProduct";
import { Product } from "../../domain/Product";
import { deleteProduct } from "../../inrafestructura/deleteProduct";
import { useNavigate } from "react-router-dom";

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProductos();
  }, []);

  const handleEdit = (id: string) => {
    navigate(`/EditProduct/${id}`);
  };

  const handleDelete = (id: string) => {
    deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <AddProduct />
      <h1>Listado de Productos</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Categoría</th>
              <th >Editar</th>
              <th >Borrar</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <img src={product.imageURL} alt={product.name} width="50" />
                </td>
                <td>{product.categoryID}</td>
                <td>
                  <button onClick={() => handleEdit(product.id)}>Editar</button>
                  </td>
                  <td>
                  <button onClick={() => handleDelete(product.id)}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
