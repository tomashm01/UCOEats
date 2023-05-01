import { useState } from 'react';
import './ModifyUser.css';
import { User } from '../../domain/user';
import { updateUser } from '../../infraestructure/updateUser';

async function Modify(data: User): Promise<User> {
  return updateUser(data);
}

export default function ModifyUser({ userToken, setToken }: { userToken: User; setToken: Function }) {
  const { uuid, name: initialName, surname: initialSurname, email: initialEmail, type, phone: initialPhone } = userToken;

  const [formData, setFormData] = useState({
    name: initialName,
    surname: initialSurname,
    email: initialEmail,
    password: '',
    type,
    phone: initialPhone,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await Modify({ ...formData, uuid, phone: formData.phone });
    response ? setToken(formData) : alert('Error al modificar los datos');
  };

  return (
    <div className="modify-container">
      <div className="modify-box">
        <h2>ModificarDatos</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="name" placeholder={initialName} onChange={handleChange}/>
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="surname" placeholder={initialSurname} onChange={handleChange} />
            <label>Surname</label>
          </div>
          <div className="user-box">
            <input type="text" name="email" placeholder={initialEmail} onChange={handleChange} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" onChange={handleChange}/>
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="number" name="phone" placeholder={initialPhone.toString()} onChange={handleChange} />
            <label>Phone</label>
          </div>
          <div className="buttons">
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
  );
}
