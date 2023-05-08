import { v4 as uuidv4, validate } from 'uuid';
import { UsuarioPedido, pedidosProductos } from './interfaces';
import { TypeDelivery } from './TypeDelivery';
import { NotNegative } from '../../productos/domain/NotNegative';

export class Pedido{

    id: uuidv4;
    usuarios:UsuarioPedido;
    quantity:NotNegative;
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
        this.quantity = new NotNegative(quantity);
        this.dateCreation = dateCreation;
        this.dateDelivery = dateDelivery;
        this.state = state;
        this.productos = productos;
    }

    toDto(){
        return {
            id:this.id,
            usuarios:{
                id:this.usuarios.id,
                name:this.usuarios.name,
                surname:this.usuarios.surname,
                email:this.usuarios.email.getValue(),
                phone:this.usuarios.phone.getValue()
            },
            quantity:this.quantity.getValue(),
            dateCreation:this.dateCreation,
            dateDelivery:this.dateDelivery,
            state:this.state,
            productos:this.productos.map((p)=>{
                return {
                    id:p.id,
                    quantity:p.quantity.getValue(),
                    price:p.price.getValue(),
                    productos:{
                        id:p.producto.id,
                        name:p.producto.name
                    }
                }
            })
        }
    }

}