import { v4 as uuidv4, validate } from 'uuid';
import { NotNegative } from './NotNegative';

//import { RolUser } from './RolUser';


export class Producto{

    id: uuidv4;
    name: string;
    price: NotNegative;
    stock: NotNegative;
    idCategory: uuidv4;
    imagen: string;

    constructor(name: string, precio: number, stock: number, imagen: string,idCategory:string,id?:string){
        this.id=(id && validate(id)) ? id : uuidv4();
        this.idCategory=idCategory;
        this.name = name;
        this.imagen=imagen;
        this.price=new NotNegative(precio);
        this.stock=new NotNegative(stock);
    }

}