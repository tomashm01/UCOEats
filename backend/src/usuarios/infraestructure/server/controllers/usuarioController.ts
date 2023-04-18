import { mySqlContactoRepository } from "../../database/mysql/mySqlUsuarioRepository";
import { Usuario } from "../../../../usuarios/domain";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getUsuario(req,res): Promise<Usuario> {
    const id:string = req.params.id;
    const usuario:Usuario= await prisma.usuarios.findUnique({
        where: {
            id: Number.parseInt(id,10)
        }
    });
    if(usuario)return res.status(200).send(usuario);
    return res.status(404).send("Usuario no encontrado");
}
export async function getAllUsuarios(req,res): Promise<Usuario[]> {
    const usuarios:Usuario[] =await prisma.usuarios.findMany();
    if(usuarios.length>0)return res.status(200).send(usuarios);
    return res.status(404).send("No hay usuarios");
}
export async function createUsuario(req,res): Promise<number>{
    const usuario:Usuario = req.body;
    const newUsuario = await prisma.usuarios.create({
        data: {
          nombre: usuario.nombre,
          apellidos: usuario.apellidos,
          email: usuario.email,
          pasword: usuario.password,
          type: usuario.type
        },
      });
    if(newUsuario)return res.status(200).send(newUsuario);
    return res.status(404).send("Usuario no creado");
}

export async function deleteUsuario(req,res): Promise<boolean> {
    const id:string = req.params.id;
    const borrado=await prisma.usuarios.delete({
        where: {
            id: Number.parseInt(id,10)
        }
    });
    if(borrado)return res.status(200).send(true);
    return res.status(404).send(false);
}

export async function modifyUsuario(req,res): Promise<boolean> {
    const usuario:Usuario = req.body;
    const id:number = usuario.id;
    const data: Partial<Usuario> = req.body;

    const nusuario:Usuario= await prisma.usuarios.findUnique({
        where: {
            id: id
        }
    });
    if(!nusuario)return res.status(404).send("Usuario no encontrado");
    const usuarioModificado = await prisma.usuarios.update({
        where: { id: Number(id) },
        data,
      });
  
      return res.status(200).send("Usuario modificado");
}


export default {getUsuario,getAllUsuarios,createUsuario,deleteUsuario,modifyUsuario};
