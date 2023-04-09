import { useEffect, useState } from 'react'
import { useBasket, useBasketDispatch } from '../../Basket/providers/BasketContext'
import './Header.css'
import { Link } from 'react-router-dom'

interface paths {
    path: string,
    value: string
}

function Header() {
    const basket = useBasket();
    const basketDispatcher = useBasketDispatch();
    const [totalItems, setTotalItems] = useState(basketDispatcher.getTotalItems());

    useEffect(() => {
        setTotalItems(basketDispatcher.getTotalItems());
    }, [basket, basketDispatcher]);
  
    const adminPaths:paths[]=[
        {path:"ModifyUser",value:"ModifyUser"},
        {path:"AddProduct",value:"AddProduct"},
        {path:"EditProduct",value:"EditProduct"},
        {path:"RemoveProduct",value:"RemoveProduct"},
        {path:"",value:"UcoEats"}
    ]
    const userPaths:paths[]=[
        {path:"ModifyUser",value:"ModifyUser"},
        {path:"",value:"UcoEats"},
        {path:"Basket",value:"Cesta"}
    ]

    const currentUser = (false) ? adminPaths : userPaths
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