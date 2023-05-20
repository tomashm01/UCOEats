import { Link } from 'react-router-dom';
import { login } from '../../infraestructure/loginUser';
import { useForm } from 'react-hook-form';
import colors from '../../../Shared/styles/colors';

interface credentials{
    email:string;
    password:string;
}

async function loginUser(credentials:credentials){
  return await login(credentials);
}

export default function Login({ setToken }:any) {
  const {register, handleSubmit, formState: { errors } } = useForm({defaultValues: {email: "", password: ""}});

  const onSubmit = async (formData: credentials) => {
    const response = await loginUser(formData);
    if(response){
      setToken(response);
    }else{
      alert("Datos incorrectos");
    }
  };

  return (
    <div className={`flex min-h-screen items-center justify-center bg-${colors.bgSecondary}`}>
      <div className={`w-full max-w-md rounded-lg`}>
        <h1 className={`mb-6 text-center text-3xl font-bold text-${colors.textPrimary}`}>Login</h1>
        <form className={`mb-4 rounded-3xl bg-${colors.bgPrimary} px-8 pb-8 pt-6 shadow-md`} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className={`mb-2 block text-sm font-bold text-${colors.textSecondary}`} htmlFor="email">Email:</label>
            <input {...register('email', { required: true })} 
              className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
              id="email" 
              type="email" 
              placeholder="Enter your email" />
                {errors.email && <p className="text-red-500 text-xs italic">Required</p>}
          </div>
          <div className="mb-6">
            <label className={`mb-2 block text-sm font-bold text-${colors.textSecondary}`} htmlFor="password">Password:</label>
            <input {...register('password', { required: true })} 
              className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
              id="password" 
              type="password" 
              placeholder="Enter your password" />
                {errors.password && <p className="text-red-500 text-xs italic">Required</p>}
          </div>
          <button className={`focus:shadow-outline rounded bg-${colors.primary} px-4 py-2 font-bold text-white hover:bg-${colors.secondary} focus:outline-none`} type="submit">Login</button>
        </form>
        <div className="text-center">
          <Link to="/register" className={`text-${colors.primary} hover:text-${colors.secondary}`}>Regístrate</Link>
        </div>
      </div>
    </div>
  );
}