import {Route,Routes,Navigate} from 'react-router-dom'

import Header                       from './Shared/Header/Header'
import Footer                       from './Shared/Footer/Footer'
import Login                        from './Auth/components/Login/Login'
import Register                     from './Auth/components/Register/Register'
import AddProduct                   from './Product/components/AddProduct/AddProduct'
import {EditProductPage,EditProduct}from './Product/components/EditProduct/EditProduct'
import ProductList                  from './Product/components/ProductList/ProductList'
import BasketList                   from './Basket/components/BasketList/BasketList'

import BasketProvider from './Basket/providers/BasketContext'



function ModifyUser(){
  return(
      <div>
          <h1>ModifyUser</h1>
      </div>
  )
}

function RemoveProduct(){
  return(
      <div>
          <h1>RemoveProduct</h1>
      </div>
  )
}

interface ProtectedRouteProps{
  user:boolean;
  children:any;
}

const ProtectedRoute=({user,children}:ProtectedRouteProps)=>{
  if(!user)
      return <Navigate to="/login"/>
  return children
}




export default function App() {

    const product1 = {
        id: '1',
        name: 'Pizza de pepperoni',
        category: 'pizza',
        price: 8.99,
        imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mejores.pro%2Fwp-content%2Fuploads%2F2016%2F01%2FPepperoni_Pizza.jpg&f=1&nofb=1&ipt=65d2a6046e57d632bf49dbf95ee6debc19fb81ea07e09cbe2997b5f2e0766789&ipo=images'
    }


  return( 
      <>
          <BasketProvider>
          <Header/>
          <main>

          <Routes>

          <Route path="/login"          element={<Login/>}/>
          <Route path="/register"       element={<Register/>}/>

          <Route path="/ModifyUser"     element={<ModifyUser/>}/>

          <Route path="/"               element={<ProductList/>}/>
          <Route path="/Basket"          element={<BasketList/>}/>

          <Route path="/AddProduct"     element={<AddProduct/>}/>
          <Route path="/RemoveProduct"  element={<RemoveProduct/>}/> 
          <Route path="/EditProduct"    element={<EditProductPage/>}>
          <Route path=":id"         element={<EditProduct/>}/>
          </Route>

          </Routes>
          </main>
          <Footer/>
          </BasketProvider>
      </>
  )      
}