import { NotNegative } from '../../productos/domain/NotNegative';
import { v4 as uuidv4, validate } from 'uuid';

export class PedidosProducto{

    id: uuidv4;
    productID: uuidv4;
    deliveryID: uuidv4;
    quantity: NotNegative;
    price: NotNegative;

    constructor(productID:string,deliveryID:string,quantity:number,price:number,id?:string){
        this.id=(id && validate(id)) ? id : uuidv4();
        this.productID=productID;
        this.deliveryID=deliveryID;
        this.quantity=new NotNegative(quantity);
        this.price=new NotNegative(price);
    }

    toDTO(){
        return {
            id: this.id,
            productID: this.productID,
            deliveryID: this.deliveryID,
            quantity: this.quantity.getValue(),
            price: this.price.getValue()
        }
    }

}