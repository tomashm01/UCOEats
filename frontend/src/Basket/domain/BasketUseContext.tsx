import { Product } from "../../Product/domain/Product";
import { Basket } from "./Basket";

export interface BasketUseContext {
    basket: Basket,
    addProduct: (product:Product) => void,
    removeProduct: (productId:string ) => void,
    clearBasket : () => void,
    getTotalItems: () => number
  }