import { v4 as uuidv4, validate } from 'uuid';
import { NotNegative } from './NotNegative';

export class Producto{

    id: uuidv4;
    name: string;
    price: NotNegative;
    stock: NotNegative;
    categoryID: uuidv4;
    imageURL: string;

    constructor(name: string, precio: number, stock: number, imagen: string,idCategory:string,id?:string){
        this.id=(id && validate(id)) ? id : uuidv4();
        this.categoryID=idCategory;
        this.name = name;
        this.imageURL=imagen;
        this.price=new NotNegative(precio);
        this.stock=new NotNegative(stock);
    }

    toDTO(){
        return {
            id: this.id,
            name: this.name,
            price: this.price.getValue(),
            stock: this.stock.getValue(),
            imagen: this.imageURL,
            idCategory: this.categoryID
        }
    }

}