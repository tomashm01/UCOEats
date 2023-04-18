
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../domain/Product';
import  getAllProducts  from '../../services/getAllProducts';
import { useEffect, useState } from 'react';
import { useBasket } from '../../../Basket/providers/BasketContext';



export default function ProductList(){
    const [products, setProducts] = useState<Product[]>([]);

    const {addProduct, removeProduct} = useBasket();

    useEffect(() => {
            setProducts(getAllProducts());
    }, []);
    return (
        <div className="product-list">
            {products.map((product:Product, index:number) =>
                (<ProductCard  key={index} product={product} addProduct={addProduct}/>)
            )}
        </div>
    )
}