import { UsuarioRepository } from '../domain/usuarioRepository';
import { Usuario } from '../domain/usuario';

export class GetUsuario {

    constructor(private repository: UsuarioRepository) { }

    async execute(id:number):Promise<Usuario> {
        return await this.repository.findById(id);
    }
}

export default GetUsuario;