import { useEffect, useState } from "react";
import ProtectedRoutes from "./Auth/components/ProtectedRoutes/ProtectedRoutes"
import BasketProvider from "./Basket/providers/BasketContext";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import { User } from "./Auth/domain/user";




export default function App() {
  const [token, setToken] = useState({
    id: "1",
    username: "test_username",
    name: "test_name",
    email: "test_eemail",
    password: "test_password",
    date: "2021-01-01",
    role: "none",
  });

  function editToken(newToken: User) {
    const prevRol = token.role;
    setToken({...newToken, role: prevRol});
  }
console.log(token)
  return (
    <>
      <BasketProvider>
        {token.role !== "none" && <Header role={token.role} />}
        <button onClick={() => setToken({ ...token, role: "user" })}>user</button>
        <button onClick={() => setToken({ ...token, role: "admin" })}>admin</button>
        <button onClick={() => setToken({ ...token, role: "none" })}>none</button>
        <ProtectedRoutes editToken={editToken} currentUser={token} />
        {token.role !== "none" && <Footer/>} 
      </BasketProvider>
    </>
  );
}