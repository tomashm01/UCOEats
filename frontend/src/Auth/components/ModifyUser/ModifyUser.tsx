import { useState } from 'react';
import './ModifyUser.css';
import { User } from '../../domain/user';
import { updateUser } from '../../infraestructure/updateUser';

async function Modify(data:{
    uuid: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    type: string;
    phone: number;
}):Promise<User> {
    console.log(data)
    return updateUser(data);
}

export default function ModifyUser({userToken, setToken }:{userToken:User,setToken:Function}) {
    const uuid = userToken.uuid;
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const type = userToken.type;
    const [phone, setPhone] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newToken = await Modify({
        uuid,
        name,
        surname,
        email,
        password,
        type,
        phone:parseInt(phone)
    });
    setToken({...newToken});
  };

  return (
    <div className="modify-container">
        <div className="modify-box">
            <h2>ModificarDatos</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input  type="text"  placeholder={userToken.name} id="name" name="name" onChange={e => setName(e.target.value)} />
                    <label>Name</label>
                </div>
                <div className="user-box">
                    <input placeholder={userToken.surname} type="text" onChange={e => setSurname(e.target.value)} />
                    <label>surname</label>
                </div>
                <div className="user-box">
                    <input type="text" placeholder={userToken.email}  name="email" id="email" onChange={e => setEmail(e.target.value)}/>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="password"   onChange={e => setPassword(e.target.value)} />
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input  type="number"  placeholder={userToken.phone.toString()} id="phone" name="name" onChange={e => setPhone(e.target.value)} />
                    <label>Phone</label>
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
    </div>
)
}


