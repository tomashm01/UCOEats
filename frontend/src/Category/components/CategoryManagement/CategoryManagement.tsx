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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-2">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Category List</h1>
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Editar
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Borrar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button onClick={() => handleEdit(category.id)} className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 border border-blue-500 rounded shadow">
                        Editar
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button onClick={() => handleDelete(category.id)} className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-4 border border-red-500 rounded shadow">
                        Borrar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  );
}
