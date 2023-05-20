import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { User } from '../../domain/user';
import { createUser } from '../../infraestructure/createUser';
import { registerUser } from '../../domain/registerUser';
import colors from '../../../Shared/styles/colors';

export default function Register({ setToken }:any) {
    const {register, handleSubmit, formState: { errors } } = useForm<registerUser>();

    const onSubmit = async (dataform:registerUser) => {
        const data = {...dataform, phone: Number(dataform.phone), type: "user"}
        const token = await createUser(data);
        setToken(token);
    }
    return (
          <div className={`flex min-h-screen items-center justify-center bg-${colors.bgSecondary}`}>
          <div className={`w-full max-w-md rounded-lg`}>
            <h1 className={`mb-6 text-center text-3xl font-bold text-${colors.textPrimary}`}>Register</h1>
            <form className={`mb-4 rounded-3xl bg-${colors.bgPrimary} px-8 pb-8 pt-6 shadow-md`} onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="name">Name:</label>
                <input 
                  {...register("name", { required: true })}
                  className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
                   id="name" 
                  type="text" 
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-xs italic">Required</p>}
              </div>
              <div className="mb-4">
                <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="surname">Surname:</label>
                <input 
                  {...register("surname", { required: true })}
                  className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
                  id="surname" 
                  type="text" 
                  placeholder="Enter your surnames"
                />
                {errors.surname && <p className="text-red-500 text-xs italic">Required</p>}
              </div>
              <div className="mb-4">
                <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="email">Email:</label>
                <input 
                  {...register("email", { required: true })}
                  className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
                  id="email" 
                  type="email" 
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-xs italic">Required</p>}
              </div>
              <div className="mb-4">
                <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="password">Password:</label>
                <input 
                  {...register("password", { required: true })}
                  className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
                  id="password" 
                  type="password" 
                  placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-500 text-xs italic">Required</p>}
              </div>
              <div className="mb-6">
                <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="phone">Phone:</label>
                <input 
                  {...register("phone", { required: true, minLength: 8, maxLength: 8 })}
                  className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
                  id="phone" 
                  type="tel" 
                  placeholder="Enter your phone"
                />
                {errors.phone && errors.phone.type === "required" && (
                  <p className="text-red-500 text-xs italic">Required</p>
                )}
                {errors.phone && (errors.phone.type === "minLength" || errors.phone.type === "maxLength") && (
                  <p className="text-red-500 text-xs italic">8 digits</p>
                )}

              </div>
              <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="submit">Register</button>
            </form>
            <div className="text-center">
              <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
            </div>
          </div>
        </div>
    );
}
