import React, { useState } from 'react';
import './ModifyUser.css';
import { User } from '../../domain/user';

async function Modify(credentials:{username:string,name:string, password:string,email:string,date:string}) {
    return {credentials}
}

export default function ModifyUser({userToken, setToken }:{userToken:User,setToken:Function}) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newToken = await Modify({
      username,
      name,
      email,
      password,
      date
    });
    setToken({...userToken, ...newToken.credentials});
  };

  return (
    <div className="modify-box">
        <h2>ModificarDatos</h2>
        <form onSubmit={handleSubmit}>
            <div className="user-box">
                <input placeholder={userToken.username} type="text" onChange={e => setUserName(e.target.value)} />
                <label>Alias</label>
            </div>
            <div className="user-box">
                <input  type="text"  placeholder={userToken.name} id="name" name="date" onChange={e => setName(e.target.value)} />
                <label>Nombre</label>
            </div>
            <div className="user-box">
                <input type="text" placeholder={userToken.email}  name="email" id="email" onChange={e => setEmail(e.target.value)}/>
                <label>Email</label>
            </div>
            <div className="user-box">
                <input type="password" placeholder="password"  onChange={e => setPassword(e.target.value)} />
                <label>Password</label>
            </div>
            <div className="user-box">
                <input  type="date"  placeholder={userToken.date} id="date" name="date" onChange={e => setDate(e.target.value)} />
                <label>Fecha de Nacimiento</label>
            </div>

            <div className ="buttons"> 
                <div className="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <button className="sub" type="submit">Modificar Datos</button>
                </div>
            </div>
        </form>
      </div>
)
}


