import { UsuarioRepository, Usuario } from "../domain";

export class CreateUsuario {
  constructor(private repository: UsuarioRepository) {}

  async execute(userData: {
    name: string;
    surname: string;
    email: string;
    password: string;
    type: string;
    phone: number;
  }): Promise<Usuario> {
    const usuario = new Usuario(
      userData.name,
      userData.surname,
      userData.email,
      userData.password,
      userData.type,
      userData.phone,
    );
    
    return await this.repository.create(usuario);
  }
}
