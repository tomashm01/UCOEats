import { useForm } from "react-hook-form";
import Category from "../../domain/Category";
import { createCategory } from "../../infreaestructure/createCategory";

export default function AddCategory() {
  const {register,handleSubmit,formState: { errors },} = useForm<{description:string}>();

  const onSubmit = async (data:{description:string}) => {
    await createCategory(data.description);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-2">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Category</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="description" className="sr-only">Description</label>
              <input
                type="text"
                id="description"
                {...register("description", { required: true })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
              />
              {errors.description && (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">This field is required</span>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
}
