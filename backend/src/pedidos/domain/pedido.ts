import { v4 as uuidv4, validate } from 'uuid';

import { TypeDelivery } from './TypeDelivery';
import { NotNegative } from '../../productos/domain/NotNegative';

export class Pedido{

    id: uuidv4;
    userID: uuidv4;
    quantity:NotNegative;
    dateCreation:Date
    dateDelivery:Date;
    state:TypeDelivery;

    constructor(quantity:number,dateCreation:Date,dateDelivery:Date,state:string,usid:string,id?:string){
        this.id=(id && validate(id)) ? id : uuidv4();
        this.userID=usid;
        this.quantity=new NotNegative(quantity);
        this.dateCreation=dateCreation;
        this.dateDelivery=dateDelivery
        if ((state !== TypeDelivery.CREADO) && (state !== TypeDelivery.PREPARACION) && (state !== TypeDelivery.TERMINADO))
            throw new Error('Tipo debe ser creado/preparacion/terminado');
        else this.state = state as TypeDelivery;
    }

    toDTO(){
        return {
            id: this.id,
            usid: this.userID,
            quantity: this.quantity.getValue(),
            dataCreation: this.dateCreation,
            dataDelivery: this.dateDelivery,
            state: this.state
        }
    }

}