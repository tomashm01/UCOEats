import { UsuarioRepository } from '../domain/usuarioRepository';

export class DeleteUsuarioById {

    constructor(private repository: UsuarioRepository) { }

    async execute(id: string): Promise<boolean> {
        const usuario = await this.repository.findById(id);
        if (!usuario) throw new Error("Usuario no encontrado");
        return await this.repository.remove(id);
    }
}

export default DeleteUsuarioById;