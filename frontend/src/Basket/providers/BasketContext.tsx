import { createContext, useContext, useReducer} from "react";

import basketReducer,{ initialState } from "./basketReducer";
import { Product } from "../../Product/domain/Product";
import { BasketUseContext } from "../domain/BasketUseContext";
import basketService  from "../services/Basket.service";

export const BasketContext = createContext<BasketUseContext>({} as BasketUseContext);

export function useBasket() {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
}


function reducer (){
  return useReducer(basketReducer,initialState);
}

export default function BasketProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = reducer();

    const addProduct = (product:Product) => {
        dispatch({ type: "ADD_PRODUCT", payload:product  });
        updatePrice();
    };
    
    const removeProduct = (productId:string ) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: productId });
        updatePrice();
    };
    
    const clearBasket = () => {
        dispatch({ type: "CLEAR_BASKET" });
    };

    const updatePrice= ()=>{
        dispatch({ type: "UPDATE_PRICE" });
    };

    const getTotalItems = () => {
      return basketService.getTotalItems(state);
    };


    const value:BasketUseContext  = {
        basket: state,
        addProduct,
        removeProduct,
        clearBasket,
        getTotalItems,

    };

  return (
    <BasketContext.Provider value={value}>
      {children}

    </BasketContext.Provider>
  );
}