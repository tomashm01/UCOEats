import { useEffect, useState } from "react";
import ProtectedRoutes from "./Auth/components/ProtectedRoutes/ProtectedRoutes"
import BasketProvider from "./Basket/providers/BasketContext";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import { User } from "./Auth/domain/user";
import { getUser } from "./Auth/infraestructure/getUser";




export default function App() {

  const defaultUser:User = {uuid: "", name: "", email: "", type: "" , surname: "", password: "", phone: 0}
  
  const [token, setToken] = useState<User>(defaultUser);

  useEffect(() => {
    const fetchUser = async () => {
      const actualUser = await getUser('df944b02-d9f1-44d4-9cf8-03f10349245d');
      if (actualUser !== null) {
        setToken(actualUser);
      }
    };

    fetchUser();
  }, []);



  return(
    <>
      <BasketProvider>
        {token.type !== "none" && <Header type={token.type} />}
        <button onClick={() => setToken({ ...token, type: "user" })}>user</button>
        <button onClick={() => setToken({ ...token, type: "admin" })}>admin</button>
        <button onClick={() => setToken({ ...token, type: "none" })}>none</button>
        <ProtectedRoutes editToken={setToken} currentUser={token} />
        {token.type !== "none" && <Footer/>} 
      </BasketProvider>
    </>
  );
}