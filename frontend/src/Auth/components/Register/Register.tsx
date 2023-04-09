import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

async function RegisterUser(credentials:{username:string, password:string,email:string,date:string}) {
    return {usernmae:credentials.username, password:credentials.password}
}

export default function Register({ setToken }:any) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const token = await RegisterUser({
        username,
        password,
        email,
        date
    });
    setToken(token);
  }


  return (
    <div className="register-box">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
            <div className="user-box">
                <input type="text" onChange={e => setUserName(e.target.value)} />
                <label>Nombre Completo</label>
            </div>
            <div className="user-box">
                <input type="text"  name="email" id="email" onChange={e => setEmail(e.target.value)}/>
                <label>Email</label>
            </div>
            <div className="user-box">
                <input type="password" onChange={e => setPassword(e.target.value)} />
                <label>Password</label>
            </div>
            <div className="user-box">
                <input  type="date" placeholder="LocalDate" id="date" name="date" onChange={e => setDate(e.target.value)} />
                <label>Fecha de Nacimiento</label>
            </div>
            <div className ="buttons"> 
                <div className="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <button className="sub" type="submit">Registrarse</button>
                </div>
                <div className="alternative">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </form>
      </div>
)
}


