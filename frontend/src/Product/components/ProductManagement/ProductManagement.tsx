import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../inrafestructura/getAllProduct';
import AddProduct from '../AddProduct/AddProduct';

type Product = {
  id: string;
  name: string;
  price: number;
  imageURL: string;
  category: string;
};


export default function ProductManagement(){
    
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProductos = async() => {
           const data = await getAllProducts();
            setProducts(data);
        };
        
        fetchProductos();
          
    }, []);


  const handleEdit = (id: string) => {

  };

    const handleDelete = (id: string) => {
    };

  return (
    <>
        <AddProduct/>
      <h1>Listado de Productos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Categoría</th>
            <th>Acciones</th>
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
              <td>{product.category}</td>
              <td>
                <button onClick={() => handleEdit(product.id)}>Editar</button>
                <button onClick={() => handleDelete(product.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};


