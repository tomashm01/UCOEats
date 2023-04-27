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
        res.status(200).send(categoria);
    } else {
        res.status(404).send("Categoria no encontrada");
    }
});

router.post('/', async (req: Request, res: Response) => {
    const categoryData = req.body;
    const categoria = await createCategoria.execute(categoryData);
    res.status(201).send(categoria);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await deleteCategoriaById.execute(id);
    if (deleted) {
        res.status(201).send(deleted);
    } else {
        res.status(404).send("Categoria no encontrada");
    }
});

router.put('/', async (req: Request, res: Response) => {
    const categoryData = req.body;
    const isUpdated = await modifyCategoria.execute(categoryData);
    if (isUpdated) {
        res.status(200).send(true);
    } else {
        res.status(404).send("Categoria no encontrada");
    }
});

export default router;
