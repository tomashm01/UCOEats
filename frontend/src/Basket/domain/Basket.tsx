import { BasketProduct } from "./BasketProduct";

export interface Basket {
    id: string;
    items: BasketProduct[];
    total:number;
  }