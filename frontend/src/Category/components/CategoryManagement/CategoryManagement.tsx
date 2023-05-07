import { useNavigate } from "react-router-dom";
import { deleteCategory } from "../../infreaestructure/deleteCategory";
import { useEffect, useState } from "react";
import Category from "../../domain/Category";
import { getAllCategories } from "../../infreaestructure/getAllCategories";
import AddCategory from "../AddCategory/AddCategory";

export default function categoryManagement() {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleEdit = (id: string) => {
    navigate(`/EditCategory/${id}`);
  };

  const handleDelete = (id: string) => {
    deleteCategory(id);
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <>
      <AddCategory />
      <h1>Category List</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.description}</td>
                <td>
                  <button onClick={() => handleEdit(category.id)}>
                    Editar
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(category.id)}>
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
