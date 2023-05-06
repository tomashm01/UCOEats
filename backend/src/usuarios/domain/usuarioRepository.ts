import { Usuario } from './usuario';

export interface UsuarioRepository {
    create(usuario: Usuario): Promise<Usuario>;
    modify(usuario: Usuario): Promise<boolean>
    remove(id:string): Promise<boolean>;
    findById(id: string): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findByEmail(email: string): Promise<Usuario>;
}