import { UsuarioRepository, Usuario } from "../domain";
const bcrypt = require('bcryptjs');

export class loginUser {
  constructor(private repository: UsuarioRepository) {}

  async execute(userData: {
    email: string;
    password: string;
  }): Promise<Usuario> {
    const dbUser = await this.repository.findByEmail(userData.email);

    if(!dbUser) return null;

    const validPassword = bcrypt.compareSync(userData.password, dbUser.password);
    if(!validPassword) return null;

    return dbUser;
  }
}
