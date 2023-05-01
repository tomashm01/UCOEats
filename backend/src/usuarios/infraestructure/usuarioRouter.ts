import { Router, Request, Response } from "express";
import { UsuarioMysqlController } from "./usuarioController";
import {
  CreateUsuario,
  ModifyUsuario,
  DeleteUsuarioById,
  GetUsuario,
  GetUsuarios,
} from "../aplication";

const router = Router();

const usuarioRepository = new UsuarioMysqlController();

const createUsuario = new CreateUsuario(usuarioRepository);
const modifyUsuario = new ModifyUsuario(usuarioRepository);
const deleteUsuarioById = new DeleteUsuarioById(usuarioRepository);
const getUsuario = new GetUsuario(usuarioRepository);
const getUsuarios = new GetUsuarios(usuarioRepository);

router.get('/', async (req: Request, res: Response) => {
    const usuarios = await getUsuarios.execute();
    res.status(200).send(usuarios);
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const usuario = await getUsuario.execute(id);
    if (usuario) {
        res.status(200).send({
            usuario: usuario,
            message: "Usuario encontrado",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Usuario no encontrado",
            ok: false
        });
    }
});

router.post('/', async (req: Request, res: Response) => {
    const userData = req.body;
    const usuario = await createUsuario.execute(userData);
    if (usuario) {
        res.status(200).send({
            usuario: usuario,
            message: "Usuario insertado",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Usuario no se ha insertado correctamente",
            ok: false
        });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await deleteUsuarioById.execute(id);
    if (deleted) {
        res.status(200).send({
            usuario: deleted,
            message: "Usuario eliminado",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Usuario no encontrado",
            ok: false
        });
    }
});

router.put('/', async (req: Request, res: Response) => {
    const userData = req.body;
    const isUpdated = await modifyUsuario.execute(userData);
    if (isUpdated) {
        res.status(200).send({
            usuario: isUpdated,
            message: "Usuario actualizado",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Usuario no encontrado",
            ok: false
        });
    }
});

export default router;
