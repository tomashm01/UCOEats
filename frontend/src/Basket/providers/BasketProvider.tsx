import { useReducer }       from "react";

import { Basket }           from "../domain/Basket";
import { Product }          from "../../Product/domain/Product";
import { BasketProduct }    from "../domain/BasketProduct";
import { BasketAction }     from "../domain/BasketActions";

import {basketService}      from "../services/Basket.service"



export default function useBasketReducer() {
    console.log("useBasketReducer")
    function productToBasketProduct(product: Product): BasketProduct {
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          imageURL: product.imageURL,
          quantity: 1,
        };
      }


    const [basket, dispatch] = useReducer((state:Basket, action:BasketAction) => {
       // const variable = action.type;
       // action.type="ERROR_DOUBLE";
        console.log("reducer");
        switch (action.type) {
        case "ADD_PRODUCT":
            return basketService.addProductToBasket(action.payload, state);
        case "REMOVE_PRODUCT":
            return basketService.removeProductFromBasket(action.payload, state);
        case "CLEAR_BASKET":
            return basketService.clearBasket(state);
        case "ERROR_DOUBLE":
            return state;
        default:
            return state;
        }
    }, basketService.createBasket());

    const addProduct = (product:Product) => {
        console.log("addProduct1");
        const basketProduct = productToBasketProduct(product);
        dispatch({ type: "ADD_PRODUCT", payload:basketProduct  });
        console.log("addProduct2");
    };
    
    const removeProduct = (productId:string ) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: productId });
    };
    
    const clearBasket = () => {
        dispatch({ type: "CLEAR_BASKET" });
    };

    const getTotalPrice = () => {
        return basketService.getTotalPriceFromBasket(basket.items);
    }

    const getTotalItems = () => {
        return basketService.getTotalItems(basket.items);
    }
    const basketFunctions = {
        addProduct,
        removeProduct,
        getTotalPrice,
        getTotalItems,
        clearBasket,
      };

    return {basket, basketFunctions};
}