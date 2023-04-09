import { createContext, useContext, useEffect } from "react";
import useBasketReducer from "./BasketProvider";
import { Basket } from "../domain/Basket";
import { BasketDispatchType } from "../domain/BasketDispatchType";

export const BasketContext = createContext<Basket|null>(null);
export const BasketDispatchContext = createContext<BasketDispatchType|null>(null);

export function useBasket() {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
}

export function useBasketDispatch() {
  const context = useContext(BasketDispatchContext);
  if (!context) {
    throw new Error("useBasketDispatch must be used within a BasketProvider");
  }
  return context;
}

export default function BasketProvider({ children }: { children: React.ReactNode }) {
  console.log("BasketProvider")
  const {basket, basketFunctions} = useBasketReducer();

  return (
    <BasketContext.Provider value={basket}>
      <BasketDispatchContext.Provider value={basketFunctions}>
      {children}
      </BasketDispatchContext.Provider>
    </BasketContext.Provider>
  );
}