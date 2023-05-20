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
      <h1 className="text-3xl font-bold mb-6 text-center">Listado de Productos</h1>
<div className="flex items-center justify-center">
  <div className="w-full max-w-full overflow-x-auto">
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ID</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Nombre</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Precio</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Imagen</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Categoría</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Editar</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Borrar</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">{product.id}</td>
              <td className="py-4 px-6 border-b border-grey-light">{product.name}</td>
              <td className="py-4 px-6 border-b border-grey-light">{product.price}</td>
              <td className="py-4 px-6 border-b border-grey-light">
                <img src={product.imageURL} alt={product.name} width="50" />
              </td>
              <td className="py-4 px-6 border-b border-grey-light">{product.categoryID}</td>
              <td className="py-4 px-6 border-b border-grey-light">
                <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 border border-blue-500 rounded shadow" onClick={() => handleEdit(product.id)}>Editar</button>
              </td>
              <td className="py-4 px-6 border-b border-grey-light">
                <button className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-4 border border-red-500 rounded shadow" onClick={() => handleDelete(product.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

    </>
  );
}
