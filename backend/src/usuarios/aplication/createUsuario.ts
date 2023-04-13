import { UsuarioRepository } from '../domain/usuarioRepository';
import { Usuario } from '../domain/usuario';

export class CreateUsuario {

    constructor(private repository: UsuarioRepository) { }

    async execute(usuario: Usuario):Promise<number> {
        return await this.repository.create(usuario);
    }
}

module.exports = { CreateUsuario }