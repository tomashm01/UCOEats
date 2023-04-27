import { useEffect, useState } from "react";
import ProtectedRoutes from "./Auth/components/ProtectedRoutes/ProtectedRoutes"
import BasketProvider from "./Basket/providers/BasketContext";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import { User } from "./Auth/domain/user";




export default function App() {
  const [token, setToken] = useState({
      "uuid": "df944b02-d9f1-44d4-9cf8-03f10349245d",
      "name": "Tomas",
      "surname": "Hidalgo",
      "email": "usaaqwquwwao@gmail.com",
      "password": "contraseña",
      "type": "admin",
      "phone": 123456789
  });

  function editToken(newToken: User) {
    const prevRol = token.type;
    setToken({...newToken});
  }
console.log(token)
  return (
    <>
      <BasketProvider>
        {token.type !== "none" && <Header type={token.type} />}
        <button onClick={() => setToken({ ...token, type: "user" })}>user</button>
        <button onClick={() => setToken({ ...token, type: "admin" })}>admin</button>
        <button onClick={() => setToken({ ...token, type: "none" })}>none</button>
        <ProtectedRoutes editToken={editToken} currentUser={token} />
        {token.type !== "none" && <Footer/>} 
      </BasketProvider>
    </>
  );
}