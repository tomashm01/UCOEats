import {Route,Routes,Navigate, useNavigate} from 'react-router-dom'

import { ProtectedRouteProps } from '../../domain/ProtectedRouteProps';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProductList from '../../../Product/components/ProductList/ProductList';
import BasketList from '../../../Basket/components/BasketList/BasketList';
import AddProduct from '../../../Product/components/AddProduct/AddProduct';
import { EditProduct, EditProductPage } from '../../../Product/components/EditProduct/EditProduct';
import { useEffect } from 'react';
import { token } from '../../domain/token';
import ModifyUser from '../ModifyUser/ModifyUser';
import { User } from '../../domain/user';




  
  function RemoveProduct(){
    return(
        <div>
            <h1>RemoveProduct</h1>
        </div>
    )
  }


  export default function ProtectedRoutes( {currentUser,editToken} :ProtectedRouteProps) {
    const navigate = useNavigate();

   const editTokenProtected = (Token:User)=>{
      editToken(Token);
    }

      

    useEffect(() => {
      console.log(currentUser);
      if (currentUser.role === "admin") {
        navigate("/AddProduct");
      } else if (currentUser.role === "user") {
        navigate("/ProductList");
      } else {
        navigate("/login");
      }
    }, [currentUser]);

    const routes = () => {
      switch (currentUser.role) {
        case "admin":
          return (
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/ModifyUser" element={<ModifyUser userToken={currentUser} setToken={editToken} />} />
                <Route path="/AddProduct" element={<AddProduct />} />
                <Route path="/RemoveProduct" element={<RemoveProduct />} />
                <Route path="/EditProduct" element={<EditProductPage />}>
                    <Route path=":id" element={<EditProduct />} />
                </Route>
            </Routes>
           
          );
        case "user":
          return (
            <Routes>
                 <Route path="/" element={<></>} />
                 <Route path="/ModifyUser" element={<ModifyUser userToken={currentUser} setToken={editToken} />} />
              <Route path="/ProductList" element={<ProductList />} />
              <Route path="/Basket" element={<BasketList />} />
            </Routes>
          );
        default:
          return (
            <Routes>
                 <Route path="/" element={<></>} />
              <Route path="/login" element={<Login setToken={editToken} />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          );
      }
    };
  
    return <>{routes()}</>;
  }
  