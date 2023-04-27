import { useEffect, useState } from 'react'
import { useBasket, } from '../../Basket/providers/BasketContext'
import './Header.css'
import { Link } from 'react-router-dom'

interface paths {
    path: string,
    value: string
}

function Header({type}:{type:string} ) {
    const {basket, getTotalItems} = useBasket();
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        setTotalItems(getTotalItems());
    }, [basket]);
  
    const adminPaths:paths[]=[
        {path:"ModifyUser",value:"ModifyUser"},
        {path:"AddProduct",value:"AddProduct"},
        {path:"EditProduct",value:"EditProduct"},
        {path:"RemoveProduct",value:"RemoveProduct"},
        {path:"",value:"UcoEats"},
    ]
    const userPaths:paths[]=[
        {path:"ModifyUser",value:"ModifyUser"},
        {path:"ProductList",value:"UcoEats"},
        {path:"ProductList",value:"UcoEats"},
        {path:"Basket",value:"Cesta"}
    ]
    const currentUser = (type =="admin") ? adminPaths : userPaths
    return( 
        <header>
            <ul>
                {currentUser.map((item:paths,index:number)=>(
                        <li  key={index}><Link to={`/${item.path}`}>{item.value}{item.path === "Basket" && ` (${totalItems})`}</Link></li>
                    ))
                }
            </ul>
    </header>
    )      
}

export default Header