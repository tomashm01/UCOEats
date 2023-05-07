import { Router, Request, Response } from "express";
import { CategoriaMysqlController } from "./categoriaContoller";
import {
  CreateCategoria,
  ModifyCategoria,
  DeleteCategoriaById,
  GetCategoria,
  GetCategorias,
} from "../aplication";

const router = Router();

const categoriaRepository = new CategoriaMysqlController();

const createCategoria = new CreateCategoria(categoriaRepository);
const modifyCategoria = new ModifyCategoria(categoriaRepository);
const deleteCategoriaById = new DeleteCategoriaById(categoriaRepository);
const getCategoria = new GetCategoria(categoriaRepository);
const getCategorias = new GetCategorias(categoriaRepository);

router.get('/', async (req: Request, res: Response) => {
    const categorias = await getCategorias.execute();
    res.status(200).send(categorias);
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const categoria = await getCategoria.execute(id);
    if (categoria) {
        res.status(200).send({
            category: categoria,
            message: "Categoria actualizada",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Categoria no encontrada",
            ok: false
        });
    }
});

router.post('/', async (req: Request, res: Response) => {
    const categoryData = req.body;
    const categoria = await createCategoria.execute(categoryData);
    if (categoria) {
        res.status(200).send({
            category: categoria,
            message: "Categoria insertada",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Categoria no insertada correctamente",
            ok: false
        });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await deleteCategoriaById.execute(id);
    if (deleted) {
        res.status(200).send({
            category: deleted,
            message: "Categoria eliminada",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Categoria no eliminada correctamente",
            ok: false
        });
    }
});

router.put('/', async (req: Request, res: Response) => {
    const categoryData = req.body;
    const isUpdated = await modifyCategoria.execute(categoryData);
    if (isUpdated) {
        res.status(200).send({
            category: isUpdated,
            message: "Categoria actualizada",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Categoria no encontrada",
            ok: false
        });
    }
});

export default router;
