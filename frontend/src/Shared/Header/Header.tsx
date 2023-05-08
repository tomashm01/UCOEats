import { useEffect, useState } from 'react'
import { useBasket, } from '../../Basket/providers/BasketContext'
import './Header.css'
import { Link } from 'react-router-dom'

interface paths {
    path: string,
    value: string
}

function Header({type,closeSesion}:{type:string,closeSesion:Function} ) {
    const {basket, getTotalItems} = useBasket();
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        setTotalItems(getTotalItems());
    }, [basket]);
  
    const adminPaths:paths[]=[
        {path:"ModifyUser",value:"ModifyUser"},
        {path:"Product",value:"Product"},
        {path:"Category",value:"Category"},
        {path:"History",value:"History"},
        {path:"",value:"UcoEats"},
    ]
    const userPaths:paths[]=[
        {path:"ModifyUser",value:"ModifyUser"},
        {path:"ProductList",value:"UcoEats"},
        {path:"History",value:"History"},
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
                <li><Link to="/" onClick={()=>closeSesion()}>Cerrar Sesión</Link></li>
            </ul>
    </header>
    )      
}

export default Header