import { UsuarioRepository } from '../domain/usuarioRepository';
import { Usuario } from '../domain/usuario';

export class ModifyUsuario {

    constructor(private repository: UsuarioRepository) { }

    async execute(id: number):Promise<void> {
        const usuario = await this.repository.findById(id);
        if (!usuario) throw new Error("Usuario no encontrado");
        await this.repository.modify(usuario);
    }
}

export default ModifyUsuario;