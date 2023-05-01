import { v4 as uuidv4, validate } from 'uuid';

import { RolUser } from './RolUser';
import { Phone } from './Phone';
import { Email } from './Email';

export class Usuario{

    id: uuidv4;
    name: string;
    surname: string;
    email: Email;
    password: string;
    type: RolUser;
    phone: Phone;

    constructor(name: string, surname: string, email: string, password: string, type: string,phone: number,id?:string){
        this.id=(id && validate(id)) ? id : uuidv4();
        this.name = name;
        this.surname=surname;
        this.password=password;
        this.phone=new Phone(phone);
        if (type !== RolUser.ADMIN && type !== RolUser.USER)
            throw new Error('Tipo debe ser user/admin');
        else this.type = type as RolUser;
        this.email = new Email(email);
    }

    toDTO(){
        return {
            id: this.id,
            name: this.name,
            surname: this.surname,
            email: this.email.getValue(),
            password: this.password,
            type: this.type,
            phone: this.phone.getValue()
        }
    }
}