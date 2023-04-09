//import * as uuid from 'uuid'
import { BasketProduct } from '../domain/BasketProduct'
import { Basket } from '../domain/Basket'

//mock
const uuid = {
    v4: () => '1234'
}

const createBasket = ():Basket => ({
    id: uuid.v4(),
    items: [],
  })
  

const clearBasket = (basket: Basket): Basket => {
    basket.items = [];
    return basket;
}


const addProductToBasket = (product: BasketProduct, basket: Basket): Basket =>{
    const index = basket.items.findIndex(item => item.id === product.id);
    if (index >= 0) {
        basket.items[index].quantity += 1;
    }else{
        basket.items.push(product);
    }

    return basket

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

    return basket
}

const getTotalPriceFromBasket = (items:BasketProduct[] ): number =>{
    const totalPrice = items.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0);
    const formattedNumber = parseFloat(totalPrice.toFixed(2));
    return formattedNumber;
}
const getTotalItems = (items:BasketProduct[] ) => {
    return items.reduce((totalItems, product) => totalItems + product.quantity, 0);
}

 export  const basketService = {
    createBasket,
    addProductToBasket,
    removeProductFromBasket,
    getTotalPriceFromBasket,
    getTotalItems,
    clearBasket
}