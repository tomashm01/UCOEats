import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

async function loginUser(credentials:{username:string, password:string}) {
    return {usernmae:credentials.username, password:credentials.password}
}

export default function Login({ setToken }:any) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


  return (
    <div className="login-box">
    <h2>Iniciar Sesión</h2>
    <form onSubmit={handleSubmit}>
          <div className="user-box">
          <input type="text" onChange={e => setUserName(e.target.value)} />
                <label>Username</label>
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


