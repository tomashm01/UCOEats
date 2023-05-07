import { useEffect, useState } from 'react';
import './ModifyUser.css';
import { User } from '../../domain/user';
import { updateUser } from '../../infraestructure/updateUser';
import { useForm } from 'react-hook-form';

async function Modify(data: User): Promise<boolean> {
  return  await updateUser(data);
}

export default function ModifyUser({ userToken, setToken }: { userToken: User; setToken: Function }) {
  const {register, handleSubmit, formState: { errors } } = useForm<User>({ defaultValues: {...userToken, password:""} });
  const onSubmit = async (data: User) => {
    const response = await Modify({...data, phone: Number(data.phone)});
    if(response){
      setToken(data);
    }  
  };

  return (
    <div className="modify-container">
      <div className="modify-box">
        <h2>ModificarDatos</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="user-box">
            <input type="text" {...register("name", { required: true })} />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" {...register("surname", { required: true })}  />
            <label>Surname</label>
          </div>
          <div className="user-box">
            <input type="text" {...register("email", { required: true })} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" {...register("password", { required: true })}/>
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="number" {...register("phone", { required: true })}/>
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
