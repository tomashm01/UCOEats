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
            id: item.id,
            quantity:  item.quantity,
            price: item.price,
            productos: {
                id: item.id,
                name: item.name
            }
        }
    })
    const quantity = productos.reduce((total:any, item:any) => total + item.quantity, 0)
    let delivery:Delivery = {
        usuarios: {
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            phone: user.phone
        },
        quantity: quantity ,
        dateCreation: new Date().toISOString(),
        dateDelivery: new Date(new Date(new Date().toISOString()).getTime() + 15*60000).toISOString(),
        state: "creado",
        productos: productos
    }
    const newDelivery = {pedido:{ ...delivery}}
    createDelivery(newDelivery)
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