import './BasketList.css'
import BasketCard from '../BasketCard/BasketCard'
import { useBasket, useBasketDispatch } from '../../providers/BasketContext'
import { useEffect, useState } from 'react';

export default function BasketList(){
    const basket= useBasket()
    const dispatcher = useBasketDispatch()

    const [items, setItems] = useState(basket.items);
    const [update, setUpdate] = useState(false);

    const handleRemoveProduct = (productId: string) => {
        dispatcher.removeProduct(productId);
        setUpdate(!update);
    }

    useEffect(() => {
        setItems(basket.items);
    }, [basket.items, update]);


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
                <h1>{dispatcher.getTotalPrice()}€</h1>
            </div>
        </div>
    )
}