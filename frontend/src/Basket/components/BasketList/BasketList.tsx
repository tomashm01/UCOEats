import './BasketList.css'
import BasketCard from '../BasketCard/BasketCard'
import { useBasket } from '../../providers/BasketContext'
import { useEffect, useState } from 'react';

export default function BasketList(){
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
        </div>
    )
}