import React, { useState } from 'react';
import './AddProduct.css';
import { Link } from 'react-router-dom';


export default function AddProduct({ setToken }:any) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const token = await AddProduct({
        name,
        price,
        stock,
        category,
        imageUrl
    });
    
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


