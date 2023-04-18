import { Router } from "express";
import { getUsuario, getAllUsuarios, createUsuario, deleteUsuario, modifyUsuario } from "../controllers/usuarioController";
const router = Router();

router.get('/',getAllUsuarios);
router.get('/:id', getUsuario);
router.post('/', createUsuario);
router.delete('/:id', deleteUsuario);
router.post('/', modifyUsuario);


export default router;