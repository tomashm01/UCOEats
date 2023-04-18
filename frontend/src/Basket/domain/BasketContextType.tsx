import { Product } from "../../Product/domain/Product";
export type BasketContextType = {
    basket?: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (productId: string) => void;
    clearBasket: () => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
  };