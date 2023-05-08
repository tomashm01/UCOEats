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
import CategoryManagement from '../../../Category/components/CategoryManagement/CategoryManagement';
import AddCategory from '../../../Category/components/AddCategory/AddCategory';
import { EditCategory, EditCategoryPage } from '../../../Category/components/EditCategory/EditCategory';
import DeliveryList from '../../../Delivery/components/DeliveryList/DeliveryList';

  export default function ProtectedRoutes({ currentUser, editToken }: ProtectedRouteProps) {

    const navigate = useNavigate();
    useEffect(() => {
      if (currentUser.type === "admin") {
        navigate("/Product");
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
            <Route path="/register" element={<Register setToken={editToken} />} />
          </>
        )}

        {currentUser.type === 'admin' && (
          <>
            <Route path="/Product" element={<ProductManagement />} />
            <Route path="/Category" element={<CategoryManagement />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/EditProduct" element={<EditProductPage />}>
              <Route path=":id" element={<EditProduct />} />
            </Route>
            <Route path="/AddCategory" element={<AddCategory />} />
            <Route path="/EditCategory" element={<EditCategoryPage />}>
              <Route path=":id" element={<EditCategory />} />
              </Route>
          </>
        )}
        {currentUser.type === 'user' && (
          <>
            <Route path="/ProductList" element={<ProductList />} />
            <Route path="/Basket" element={<BasketList userToken={currentUser} />} />
            <Route path="/History" element={<DeliveryList/>} />
          </>
        )}
      </Routes>
    );
  }
  