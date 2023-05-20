import { useState, useEffect } from "react";
import { Product } from "../../domain/Product";
import productData from "../../domain/ProductData";
import Category from "../../../Category/domain/Category";
import { createProduct } from "../../inrafestructura/createProduct";
import { getAllCategories } from "../../../Category/infreaestructure/getAllCategories";
import { useForm } from "react-hook-form";
import colors from "../../../Shared/styles/colors";

export default function AddProduct() {
  const [categories, setCategories] = useState<Category[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<productData>();

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getAllCategories();
      setCategories(data);
      if (data.length > 0) {
        setValue("categoryID", data[0].id);
      }
    };
    fetchProductos();
  }, []);

  const onSubmit = async (data: productData) => {
     createProduct({...data, price: Number(data.price), stock: Number(data.stock)});
  };

  return (
    <div className={`flex min-h-screen items-center justify-center bg-${colors.bgSecondary}`}>
      <div className={`w-full max-w-md rounded-lg`}>
        <h2 className={`mb-6 text-center text-3xl font-bold text-${colors.textPrimary}`}>Add Product</h2>
        <form className={`mb-4 rounded-3xl bg-${colors.bgPrimary} px-8 pb-8 pt-6 shadow-md`} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="name">Name</label>
            <input 
              type="text"
              id="name"
              {...register("name", { required: true })}
              className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
            />
            {errors.name && <p className="text-red-500 text-xs italic">Required</p>}
          </div>
          <div className="mb-4">
            <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              {...register("price", { required: true, min: 0 })}
              className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
            />
            {errors.price && <p className="text-red-500 text-xs italic">Required</p>}
            {errors.price && errors.price.type === "min" && <p className="text-red-500 text-xs italic">The price must be greater than or equal to 0</p>}
          </div>
          <div className="mb-4">
            <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="stock">Stock</label>
            <input
              type="number"
              id="stock"
              {...register("stock", { required: true, min: 0 })}
              className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
            />
            {errors.stock && <p className="text-red-500 text-xs italic">Required</p>}
            {errors.stock && errors.stock.type === "min" && <p className="text-red-500 text-xs italic">The stock must be greater than or equal to 0</p>}
          </div>
          <div className="mb-6">
            <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="categoryID">Category</label>
            <select
              id="categoryID"
              {...register("categoryID", { required: true })}
              className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.description}
                </option>
              ))}
            </select>
            {errors.categoryID && <p className="text-red-500 text-xs italic">Required</p>}
          </div>
          <div className="mb-6">
            <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="imageURL">Image URL</label>
            <input
              type="text"
              id="imageURL"
              {...register("imageURL", { required: true })}
              className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
            />
            {errors.imageURL && <p className="text-red-500 text-xs italic">Required</p>}
          </div>
          <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="submit">Add</button>
        </form>
      </div>
    </div>
  );
  
}
