import { UsuarioRepository } from '../domain/usuarioRepository';
import { Usuario } from '../domain/usuario';

export class ModifyUsuario {

    constructor(private repository: UsuarioRepository) { }

    async execute(data:{
        uuid: string;
        name: string;
        surname: string;
        email: string;
        password: string;
        type: string;
        phone: number;
    }):Promise<boolean> {
        const usuario = new Usuario(data.name, data.surname, data.email, data.password, data.type, data.phone,data.uuid);
        return await this.repository.modify(usuario);
    }
}

export default ModifyUsuario;