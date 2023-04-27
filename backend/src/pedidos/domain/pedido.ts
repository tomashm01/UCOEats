import { v4 as uuidv4, validate } from 'uuid';

import { TypeDelivery } from './TypeDelivery';


export class Pedido{

    id: uuidv4;
    usid: uuidv4;
    quantity:number;
    dataCreation:Date
    dataDelivery:Date;
    state:TypeDelivery;

    constructor(quantity:number,dateCreation:Date,dateDelivery:Date,state:string,usid?:string,id?:string){
        this.id=(id && validate(id)) ? id : uuidv4();
        this.usid=(usid && validate(usid)) ? usid : uuidv4();
        this.quantity=quantity;
        this.dataCreation=dateCreation;
        this.dataDelivery=dateDelivery
        if ((state !== TypeDelivery.CREADO) && (state !== TypeDelivery.PREPARACION) && (state !== TypeDelivery.TERMINADO))
            throw new Error('Tipo debe ser creado/preparacion/terminado');
        else this.state = state as TypeDelivery;
    }

}