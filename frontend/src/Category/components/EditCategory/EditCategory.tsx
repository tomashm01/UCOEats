import { useForm } from "react-hook-form";
import { Outlet, useParams } from "react-router-dom";
import Category from "../../domain/Category";
import { useEffect } from "react";
import { getCategory } from "../../infreaestructure/getCategory";
import { updateCategory } from "../../infreaestructure/updateCategory";

export function EditCategoryPage() {
  return (
    <div>
      <h1>Editar Categoria</h1>
      <Outlet />
    </div>
  );
}

export function EditCategory() {
  const { id } = useParams();
  if (!id) return <></>;
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Category>();

  useEffect(() => {
    const fetchCategory = async () => {
    const response = await getCategory(id);
    if (response) {
      setValue("description", response.description);
    }
    };
    fetchCategory();
  }, [id]);

  const onSubmit = async (data:Category) => {
    await updateCategory(data);
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Edit Category</h2>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="description" className="sr-only">Description</label>
          <input 
            id="description" 
            type="text" 
            {...register("description", { required: true })} 
            required 
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            placeholder="Description"
          />
          {errors.description && (
            <span className="error text-red-600">This field is required</span>
          )}
        </div>
      </div>

      <div>
        <button 
          type="submit" 
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Edit
        </button>
      </div>
    </form>
  </div>
</div>

  );
}

