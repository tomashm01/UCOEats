import {useParams,Outlet} from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { Product } from "../../domain/Product";
import productData from "../../domain/ProductData";
import Category from "../../../Category/domain/Category";
import { getAllCategories } from "../../../Category/infreaestructure/getAllCategories";
import { useForm } from "react-hook-form";
import { getProduct } from '../../inrafestructura/getProduct';
import { updateProduct } from '../../inrafestructura/updateProduct';

export function EditProductPage(){
    
    return(
        <div>
            <h1>Texto EditProduct</h1>
            <Outlet/>
        </div>
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
          if (data.length > 0) {
            setValue("categoryID", data[0].id);
          }
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
        <div className="container">
          <div className="box">
            <h2>Edit Product {productTostring(productToEdit)} </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="error">This field is required</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  {...register("price", { required: true, min: 0 })}
                />
                {errors.price && (
                  <span className="error">
                    {errors.price.type === "required" && "This field is required"}
                    {errors.price.type === "min" &&
                      "The price must be greater than or equal to 0"}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="stock">Stock</label>
                <input
                  type="number"
                  id="stock"
                  {...register("stock", { required: true, min: 0 })}
                />
                {errors.stock && (
                  <span className="error">
                    {errors.stock.type === "required" && "This field is required"}
                    {errors.stock.type === "min" &&
                      "The stock must be greater than or equal to 0"}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="categoryID">Category</label>
                <select
                  id="categoryID"
                  {...register("categoryID", { required: true })}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.description}
                    </option>
                  ))}
                </select>
                {errors.categoryID && (
                  <span className="error">This field is required</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="imageURL">Image URL</label>
                <input 
                  type="text"
                  id="imageURL"
                  {...register("imageURL", { required: true })}
                />
                {errors.imageURL && (
                  <span className="error">This field is required</span>
                )}
              </div>
              <div className="buttons">
                <button className="submit" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }