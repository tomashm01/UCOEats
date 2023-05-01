import { UsuarioRepository ,Usuario } from "../domain";

import { PrismaClient } from '@prisma/client'

export class UsuarioMysqlController implements UsuarioRepository{
    
    private prisma:PrismaClient;
    constructor(){
        this.prisma = new PrismaClient();
    }

    async findById(id:string): Promise<Usuario> {
        const dbUser = await this.prisma.usuarios.findUnique({
            where: {
                uuid: id
            }
        });
        if(!dbUser){
            return null;
        }
        return new Usuario(dbUser.nombre,dbUser.apellidos,dbUser.email,dbUser.password,dbUser.tipo,dbUser.telefono,dbUser.uuid);
    }

    async create(usuario:Usuario): Promise<Usuario>{
        const dbUser= await this.prisma.usuarios.create({
            data: {
                uuid        : usuario.id,
                nombre      : usuario.name,
                apellidos   : usuario.surname,
                email       : usuario.email.getValue(),
                password    : usuario.password,
                tipo        : usuario.type,
                telefono    : usuario.phone.getValue()
            }
        });

        return new Usuario(dbUser.nombre,dbUser.apellidos,dbUser.email,dbUser.password,dbUser.tipo,dbUser.telefono,dbUser.uuid);

    }

    async modify(usuario: Usuario): Promise<boolean> {
        const data = {
            nombre      : usuario.name,
            apellidos   : usuario.surname,
            email       : usuario.email.getValue(),
            password    : usuario.password,
            tipo        : usuario.type,
            telefono    : usuario.phone.getValue()
        };
    
        const user= await this.prisma.usuarios.update({
          where: {uuid : usuario.id},
          data,
        });
        return !!user;
    }
    
    async remove(id:string): Promise<boolean> {
        const usuario= await this.prisma.usuarios.delete({
            where: {
                uuid: id
            }
        });

        return !!usuario;
    }  

    async findAll(): Promise<Usuario[]> {
        const usuarios= await this.prisma.usuarios.findMany();
        return usuarios.map((usuario)=> new Usuario(usuario.nombre,usuario.apellidos,usuario.email,usuario.password,usuario.tipo,usuario.telefono,usuario.uuid));
    }
  
}
