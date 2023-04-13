export class Usuario{

    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    password: string;
    type: string;

    constructor(id: number, nombre: string, apellidos: string, email: string, password: string, type: string){
        this.id = id;
        this.nombre = nombre;
        this.apellidos=apellidos;
        this.password=password;
        if(type!="admin" && type!="user") throw new Error("Tipo debe ser user/admin");
        else this.type=type;
        this.email = email;
    }

} 