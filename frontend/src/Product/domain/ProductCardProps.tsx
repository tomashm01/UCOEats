import {Product} from './Product';

export interface ProductCardProps {
    product: Product;
    addProduct: (product: Product) => void;
}