//import * as uuid from 'uuid'
import { BasketProduct } from '../domain/BasketProduct'
import { Basket } from '../domain/Basket'
import { Product } from '../../Product/domain/Product'

//mock
const uuid = {
    v4: () => '1234'
}

const createBasket = (): Basket => ({
    id: uuid.v4(),
    items: [],
    total: 0,
  });
  

  const clearBasket = (basket: Basket): Basket => {
    return { ...basket, items: [], total: 0 };
  };

function productToBasketProduct(product: Product): BasketProduct {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        imageURL: product.imageURL,
        quantity: 1,
    };
}

const addProductToBasket = (product: Product, basket: Basket): Basket => {
    const index = basket.items.findIndex((item) => item.id === product.id);
    const newItems = [...basket.items];
  
    if (index >= 0) {
      newItems[index] = { ...newItems[index], quantity: newItems[index].quantity + 1 };
    } else {
      newItems.push(productToBasketProduct(product));
    }
  
    return { ...basket, items: newItems };
  };


const removeProductFromBasket = (productId: string, basket: Basket): Basket => {
    const index = basket.items.findIndex((item) => item.id === productId);
    const newItems = [...basket.items];
  
    if (index >= 0) {
      if (newItems[index].quantity > 1) {
        newItems[index] = { ...newItems[index], quantity: newItems[index].quantity - 1 };
      } else {
        newItems.splice(index, 1);
      }
    }
  
    return { ...basket, items: newItems };
  };

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