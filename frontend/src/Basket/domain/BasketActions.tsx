import { BasketProduct } from "./BasketProduct";


export type BasketAction =
  | { type: "ERROR_DOUBLE" }
  | { type: "ADD_PRODUCT"; payload: BasketProduct }
  | { type: "REMOVE_PRODUCT"; payload: string }
  | { type: "CLEAR_BASKET" };