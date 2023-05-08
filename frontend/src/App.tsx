import { useEffect, useState } from "react";
import ProtectedRoutes from "./Auth/components/ProtectedRoutes/ProtectedRoutes"
import BasketProvider from "./Basket/providers/BasketContext";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import { User } from "./Auth/domain/user";

export default function App() {

  const defaultUser:User = {id: "", name: "", email: "", type: "none" , surname: "", password: "", phone: 0}
  
  const [token, setToken] = useState<User>(defaultUser);

  const closeSesion = () => {
    setToken(defaultUser);
  }

  return(
    <>
      <BasketProvider>
        {token.type !== "none" && <Header type={token.type} closeSesion={closeSesion} />}
        <ProtectedRoutes editToken={setToken} currentUser={token} />
        {token.type !== "none" && <Footer/>} 
      </BasketProvider>
    </>
  );
}