import { v4 as uuidv4, validate } from 'uuid';

//import { RolUser } from './RolUser';


export class Categoria{

    id: uuidv4;
    description: string

    constructor(description:string,id?:string){
        this.id=(id && validate(id)) ? id : uuidv4();

        this.description=description;
    }

}