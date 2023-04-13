import { UsuarioRepository } from '../domain/usuarioRepository';

export class DeleteUsuarioById {

    constructor(private repository: UsuarioRepository) { }

    async execute(id: number): Promise<void> {
        const usuario = await this.repository.findById(id);
        if (!usuario) throw new Error("Usuario no encontrado");
        await this.repository.delete(usuario);
    }
}

export default DeleteUsuarioById;