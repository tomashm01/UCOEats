import { Route, Routes, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { ProtectedRouteProps } from '../../domain/ProtectedRouteProps';
import ProductList from '../../../Product/components/ProductList/ProductList';
import BasketList from '../../../Basket/components/BasketList/BasketList';
import AddProduct from '../../../Product/components/AddProduct/AddProduct';
import { EditProduct, EditProductPage } from '../../../Product/components/EditProduct/EditProduct';
import ModifyUser from '../ModifyUser/ModifyUser';
import ProductManagement from '../../../Product/components/ProductManagement/ProductManagement';

  function RemoveProduct(){
    return(
        <div>
            <h1>RemoveProduct</h1>
        </div>
    )
  }



function CategoryTable() {
    return (
      <div>
        <h1>CategoryTable</h1>
      </div>
    );
  }



  export default function ProtectedRoutes({ currentUser, editToken }: ProtectedRouteProps) {

    const navigate = useNavigate();
    useEffect(() => {
      if (currentUser.type === "admin") {
        navigate("/AddProduct");
      } else if (currentUser.type === "user") {
        navigate("/ProductList");
      } else {
        navigate("/login");
      }
    }, [currentUser.type]);
  
    return (
      
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/ModifyUser" element={<ModifyUser userToken={currentUser} setToken={editToken} />} />
        {currentUser.type !== 'admin' && currentUser.type !== 'user' &&(
          <>
            <Route path="/login" element={<Login setToken={editToken} />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

        {currentUser.type === 'admin' && (
          <>
            <Route path="/Product" element={<ProductManagement />} />
            <Route path="/Category" element={<CategoryTable />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/RemoveProduct" element={<RemoveProduct />} />
            <Route path="/EditProduct" element={<EditProductPage />}>
              <Route path=":id" element={<EditProduct />} />
            </Route>
          </>
        )}
        {currentUser.type === 'user' && (
          <>
            <Route path="/ProductList" element={<ProductList />} />
            <Route path="/Basket" element={<BasketList />} />
            <Route path="/History" element={<></>} />
          </>
        )}
      </Routes>
    );
  }
  