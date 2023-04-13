import { Usuario } from './usuario';
export interface UsuarioRepository {
    create(usuario: Usuario): Promise<number>;
    delete(usuario: Usuario): Promise<void>;
    findAll(): Promise<Usuario[]>;
    findById(id: number): Promise<Usuario>;
    modify(id: number): Promise<void>
}