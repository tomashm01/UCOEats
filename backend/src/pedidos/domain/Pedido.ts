import { v4 as uuidv4, validate } from 'uuid';
import { UsuarioPedido, pedidosProductos } from './interfaces';
import { TypeDelivery } from './TypeDelivery';

export class Pedido{

    id: uuidv4;
    usuarios:UsuarioPedido;
    quantity:number;
    dateCreation:Date;
    dateDelivery:Date;
    state:TypeDelivery;
    productos:pedidosProductos[];

    constructor(
        id: uuidv4,
        usuarios:UsuarioPedido,
        quantity:number,
        dateCreation:Date,
        dateDelivery:Date,
        state:TypeDelivery,
        productos:pedidosProductos[]
    ){
        this.id = id;
        this.usuarios = usuarios;
        this.quantity = quantity;
        this.dateCreation = dateCreation;
        this.dateDelivery = dateDelivery;
        this.state = state;
        this.productos = productos;
    }


    toDTO(){
        return {
            id:this.id,
            usuarios:this.usuarios,
            quantity:this.quantity,
            dateCreation:this.dateCreation,
            dateDelivery:this.dateDelivery,
            state:this.state,
            productos:this.productos
        }
    }

}