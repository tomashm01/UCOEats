import { Product } from "../../Product/domain/Product";


export type BasketAction =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "REMOVE_PRODUCT"; payload: string }
  | { type: "UPDATE_PRICE" }
  | { type: "CLEAR_BASKET" }
  | { type: "UNKNOWN_ACTION"; payload: never };