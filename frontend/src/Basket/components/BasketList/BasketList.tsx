import './BasketList.css'
import BasketCard from '../BasketCard/BasketCard'
import { useBasket } from '../../providers/BasketContext'
import { useEffect, useState } from 'react';
import { Delivery } from '../../../Delivery/domain/delivery';
import { User } from '../../../Auth/domain/user';
import { Basket } from '../../domain/Basket';
import { createDelivery } from '../../../Delivery/infraestructure/createDelivery';

function basketToDelivery(items:any,user:User){
    let productos = items.map((item:any)=>{
        return {
            quantity: { 
                value: item.quantity
            },
            price: {
                value: item.price
            },
            id: item.id,
            producto: {
                id: item.id,
                name: item.name
            }
        }
    })
    //quantity es el numero total de items que hay en la lista, como cada item tiene su cantidad, se suman todas las cantidades

    let delivery:Delivery = {
        usuarios: {
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: {
                value: user.email
            },
            phone: {
                value: user.phone
            }
        },
        quantity: productos.reduce((total:any,producto:any)=>total+producto.quantity.value,0) ,
        dateCreation: new Date().toISOString(),
        dateDelivery: new Date().toISOString(),
        state: "Pedido realizado",
        productos: productos
    }
    createDelivery(delivery)
}



export default function BasketList({userToken}:{userToken:User}) {
    const {basket, removeProduct}= useBasket()
    const [items, setItems] = useState(basket.items);

    const handleRemoveProduct = (productId: string) => {
        removeProduct(productId);
    }

    useEffect(() => {
        setItems(basket.items);
    }, [basket]);


    return (
        <div className="carro">
            <h1>Carrito</h1>
            <div className="productos">
                {items.map((producto:any, index:any) => 
                    (<BasketCard
                        key={index}
                        info={producto}
                        onRemoveProduct={handleRemoveProduct}
                    />)
                )}
            </div>
            <div className="carro-dinero">
                <h1>Total:</h1>
                <h1>{basket.total}€</h1>
            </div>
            <div className="carro-comprar">
                <button onClick={()=>basketToDelivery(items,userToken)}>Comprar</button>
            </div>
        </div>
    )
}