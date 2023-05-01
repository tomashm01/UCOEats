import React, { useState } from 'react';
import './AddProduct.css';
import { Product } from '../../domain/Product';
import { createProduct } from '../../inrafestructura/createProduct';
import productData from '../../domain/ProductData';


async function Create(data: productData):Promise<Product>{
    return createProduct(data);
}


export default function AddProduct({ setToken }:any) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [idCategory, setCategory] = useState("");
  const [image, setImageUrl] = useState("");


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const data = {
        name,
        price:parseInt(price),
        stock:parseInt(stock),
        idCategory,
        image
    }
    const token = await Create(data);
    
  }

  return (
    <div className="modify-box">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
            <div className="user-box">
                <input  type="text" onChange={e => setName(e.target.value)} />
                <label>Name</label>
            </div>
            <div className="user-box">
                <input  type="text" onChange={e => setPrice(e.target.value)} />
                <label>Price</label>
            </div>
            <div className="user-box">
                <input  type="text" onChange={e => setStock(e.target.value)} />
                <label>Price</label>
            </div>
            <div className="user-box">
                <input  type="text" onChange={e => setStock(e.target.value)} />
                <label>stock</label>
            </div>
            <div className="user-box">
                <input  type="text" onChange={e => setCategory(e.target.value)} />
                <label>category</label>
            </div>
            <div className="user-box">
                <input  type="text" onChange={e => setImageUrl(e.target.value)} />
                <label>imageUrl</label>
            </div>


            <div className ="buttons"> 
                <div className="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <button className="sub" type="submit">Add</button>
                </div>
            </div>
        </form>
      </div>
)
}


