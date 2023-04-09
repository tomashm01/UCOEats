//import * as uuid from 'uuid'
import { BasketProduct } from '../domain/BasketProduct'
import { Basket } from '../domain/Basket'
import { Product } from '../../Product/domain/Product'

//mock
const uuid = {
    v4: () => '1234'
}

const createBasket = ():Basket => ({
    id: uuid.v4(),
    items: [],
    total: 0
})
  

const clearBasket = (basket: Basket): Basket => {
    basket.items = [];
    return basket;
}

function productToBasketProduct(product: Product): BasketProduct {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        imageURL: product.imageURL,
        quantity: 1,
    };
}

  const addProductToBasket = (product: Product, basket: Basket): Basket =>{
    const index = basket.items.findIndex(item => item.id === product.id);
    if (index >= 0) {
        basket.items[index].quantity += 1;
    }else{
        basket.items.push(productToBasketProduct(product));
    }
    return basket;

}


const removeProductFromBasket = (productId: string, basket: Basket): Basket =>{
    console.log(productId)
    const index = basket.items.findIndex(item => item.id === productId);
    if (index >= 0) {
        if(basket.items[index].quantity > 1){
            basket.items[index].quantity -= 1;
        }else{
            basket.items.splice(index, 1);
        }
        
    }

    return basket;
}

const getTotalPriceFromBasket = (basket:Basket ): number =>{
    const totalPrice = basket.items.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0);
    const formattedNumber = parseFloat(totalPrice.toFixed(2));
    return formattedNumber;
}
const getTotalItems = (basket:Basket ) => {
    return basket.items.reduce((totalItems, product) => totalItems + product.quantity, 0);
}

const basketService = {
    createBasket,
    addProductToBasket,
    removeProductFromBasket,
    getTotalPriceFromBasket,
    getTotalItems,
    clearBasket
}

export default basketService;