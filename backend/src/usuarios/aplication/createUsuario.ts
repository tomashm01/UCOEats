import { UsuarioRepository, Usuario } from "../domain";
import * as uuid from 'uuid';
const bcrypt = require('bcryptjs');

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

    const dbUser = await this.repository.findByEmail(userData.email);
    if(dbUser) return null;

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(userData.password, salt);
    userData.password=hash;

    const usuario = new Usuario(
      userData.name,
      userData.surname,
      userData.email,
      userData.password,
      userData.type,
      userData.phone
    );
    
    return await this.repository.create(usuario);
  }
}
