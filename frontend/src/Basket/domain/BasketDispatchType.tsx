import { Product } from "../../Product/domain/Product";

export type BasketDispatchType = {
    addProduct: (product: Product) => void;
    removeProduct: (productId: string) => void;
    clearBasket: () => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
  };