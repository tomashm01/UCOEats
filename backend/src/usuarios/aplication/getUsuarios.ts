import { UsuarioRepository } from '../domain/usuarioRepository';
import { Usuario } from '../domain/usuario';

export class GetUsuarios {

    constructor(private repository: UsuarioRepository) { }

    async execute():Promise<Usuario[]> {
        return await this.repository.findAll();
    }
}

export default GetUsuarios;