import { v4 as uuidv4, validate } from 'uuid';

//import { RolUser } from './RolUser';


export class Producto{

    id: uuidv4;
    name: string;
    price: number;
    stock: number;
    cuid: uuidv4;
    imagen: string;

    constructor(name: string, precio: number, stock: number, imagen: string,cuid?:string,id?:string){
        this.id=(id && validate(id)) ? id : uuidv4();
        this.cuid=(cuid && validate(cuid)) ? cuid : uuidv4();

        this.name = name;
        this.imagen=imagen;
        this.price=precio;
        this.stock=stock;
    }

}