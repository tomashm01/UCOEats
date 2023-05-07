import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { login } from '../../infraestructure/loginUser';

async function loginUser(credentials:{email:string, password:string}) {
  const response = await login(credentials)
  if(response != null){
    return response;
  }
  return null;
}

export default function Login({ setToken }:any) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    if(token != null){
      setToken(token);
    }
  }


  return (
    <div className="login-box">
    <h2>Iniciar Sesión</h2>
    <form onSubmit={handleSubmit}>
          <div className="user-box">
          <input type="text" onChange={e => setemail(e.target.value)} />
                <label>email</label>
          </div>
              <div className="user-box">
              <input type="password" onChange={e => setPassword(e.target.value)} />
               <label>Password</label>
          </div>
          <div className ="buttons"> 
            <div className="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button className="sub" type="submit">Login</button>
            </div>
            <div className="alternative">
                <Link to="/register">Registrate</Link>
            </div>

            
          </div>
          
    </form>
    
  </div>
)
}


