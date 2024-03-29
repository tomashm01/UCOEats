import { Basket }           from "../domain/Basket";
import { BasketAction }     from "../domain/BasketActions";
import basketService      from "../services/Basket.service"


export const initialState:Basket = basketService.createBasket();

const basketReducer = (state: Basket, action: BasketAction) => {

    switch (action.type) {
        case "ADD_PRODUCT":
            return basketService.addProductToBasket(action.payload, state);
        case "REMOVE_PRODUCT":
            return basketService.removeProductFromBasket(action.payload, state);
        case "CLEAR_BASKET":
            return basketService.clearBasket(state);
        case "UPDATE_PRICE":
            return {...state,total: basketService.getTotalPriceFromBasket(state)};
        default:
            return state;
        }
};


export default basketReducer;