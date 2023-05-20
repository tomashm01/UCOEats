import {useParams,Outlet} from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { Product } from "../../domain/Product";
import productData from "../../domain/ProductData";
import Category from "../../../Category/domain/Category";
import { getAllCategories } from "../../../Category/infreaestructure/getAllCategories";
import { useForm } from "react-hook-form";
import { getProduct } from '../../inrafestructura/getProduct';
import { updateProduct } from '../../inrafestructura/updateProduct';
import colors from '../../../Shared/styles/colors';

export function EditProductPage(){
    
    return(
            <Outlet/>
    )
  }

export function EditProduct(){
    const {id} = useParams();
    if(!id) return(<></>);
      const [categories, setCategories] = useState<Category[]>([]);
      const [productToEdit, setProductData] = useState<Product>({id: "0", name: "default", price: 0, stock: 0, imageURL: "default", categoryID: "default"});
      const { register, handleSubmit, setValue, formState: { errors } } = useForm<Product>();
      
    
      useEffect(() => {
        const fetchProductos = async () => {
          const data = await getAllCategories();
          setCategories(data);
          const response = await getProduct(id);
          if(response){
            setProductData(response);
            setValue("name", response.name);
            setValue("price", response.price);
            setValue("stock", response.stock);
            setValue("categoryID", response.categoryID);
            setValue("imageURL", response.imageURL);
          }
        };
        fetchProductos();
      }, [id]);
    
      const onSubmit = async (data: productData) => {
        const product:Product = {...data, price: Number(data.price), stock: Number(data.stock), id: id};
         updateProduct(product);
      };

      const productTostring = (product: Product) => {
        return product.name;
      }
    
      return (
        <div className={`flex min-h-screen items-center justify-center bg-${colors.bgSecondary}`}>
          <div className={`w-full max-w-md rounded-lg`}>
            <h2 className={`mb-6 text-center text-3xl font-bold text-${colors.textPrimary}`}>Edit Product {productTostring(productToEdit)}</h2>
            <form className={`mb-4 rounded-3xl bg-${colors.bgPrimary} px-8 pb-8 pt-6 shadow-md`} onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
                />
                {errors.name && <p className="text-red-500 text-xs italic">This field is required</p>}
              </div>
              <div className="mb-4">
                <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  {...register("price", { required: true, min: 0 })}
                  className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
                />
                {errors.price && <p className="text-red-500 text-xs italic">This field is required</p>}
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
                {errors.stock && <p className="text-red-500 text-xs italic">This field is required</p>}
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
                {errors.categoryID && <p className="text-red-500 text-xs italic">This field is required</p>}
              </div>
              <div className="mb-6">
                <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="imageURL">Image URL</label>
                <input
                  type="text"
                  id="imageURL"
                  {...register("imageURL", { required: true })}
                  className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
                />
                {errors.imageURL && <p className="text-red-500 text-xs italic">This field is required</p>}
              </div>
              <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="submit">Edit</button>
            </form>
          </div>
        </div>
      );
      
    }