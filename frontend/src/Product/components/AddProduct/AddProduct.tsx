import React, { useState, useEffect, useRef } from "react";
import "./AddProduct.css";
import { Product } from "../../domain/Product";
import productData from "../../domain/ProductData";
import Category from "../../../Category/domain/Category";
import { createProduct } from "../../inrafestructura/createProduct";
import { getAllCategories } from "../../../Category/infreaestructure/getAllCategories";
import { useForm } from "react-hook-form";

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
    <div className="container">
      <div className="box">
        <h2>Add Product</h2>
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
