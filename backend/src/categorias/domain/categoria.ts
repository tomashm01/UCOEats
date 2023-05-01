import { v4 as uuidv4, validate } from 'uuid';

export class Categoria{

    id: uuidv4;
    description: string

    constructor(description:string,id?:string){
        this.id=(id && validate(id)) ? id : uuidv4();
        this.description=description;
    }

    toDTO(){
        return {
            id: this.id,
            description: this.description
        }
    }

}