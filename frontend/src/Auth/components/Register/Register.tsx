import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { User } from '../../domain/user';
import { createUser } from '../../infraestructure/createUser';
import { registerUser } from '../../domain/registerUser';




export default function Register({ setToken }:any) {
    const {register, handleSubmit, formState: { errors } } = useForm<registerUser>();

    const onSubmit = async (dataform:registerUser) => {
        const data = {...dataform, phone: Number(dataform.phone), type: "user"}
        const token = await createUser(data);
        setToken(token);
    }
    return (
      <div className="modify-container">
        <div className="modify-box">
          <h2>Registro </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="user-box">
              <input type="text"  {...register("name", { required: true })}/>
              <label>Name</label>
            </div>
            <div className="user-box">
              <input type="text"  {...register("surname", { required: true })} />
              <label>Surname</label>
            </div>
            <div className="user-box">
              <input type="text"  {...register("email", { required: true })}  />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" {...register("password", { required: true })}/>
              <label>Password</label>
            </div>
            <div className="user-box">
              <input type="number"  {...register("phone", { required: true })} />
              <label>Phone</label>
            </div>
            <div className="buttons">
              <div className="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button className="sub" type="submit">Registrarse</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}


