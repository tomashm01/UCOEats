import { Phone } from '../../usuarios/domain/Phone';
import { Email } from '../../usuarios/domain/Email';
import { v4 as uuidv4 } from 'uuid';
import { NotNegative } from '../../productos/domain/NotNegative';

export interface UsuarioPedido{
    id: uuidv4;
    name:string;
    surname:string;
    email:Email;
    phone:Phone;
}

export default interface ProductoPedido{
    id: uuidv4;
    name:string;
}

export interface pedidosProductos{
    quantity:NotNegative;
    price:NotNegative;
    id: uuidv4;
    producto:ProductoPedido;
}
