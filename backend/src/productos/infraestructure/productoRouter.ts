import { Router, Request, Response } from "express";
import { ProductoMysqlController } from "./productoController";
import {
  CreateProducto,
  ModifyProducto,
  DeleteProductoById,
  GetProducto,
  GetProductos,
} from "../aplication";

const router = Router();

const productoRepository = new ProductoMysqlController();

const createProducto = new CreateProducto(productoRepository);
const modifyProducto = new ModifyProducto(productoRepository);
const deleteProductoById = new DeleteProductoById(productoRepository);
const getProducto = new GetProducto(productoRepository);
const getProductos = new GetProductos(productoRepository);

router.get('/', async (req: Request, res: Response) => {
    const productos = await getProductos.execute();
    res.status(200).send(productos);
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const producto = await getProducto.execute(id);
    if (producto) {
        res.status(200).send(producto);
    } else {
        res.status(404).send("Producto no encontrado");
    }
});

router.post('/', async (req: Request, res: Response) => {
    const productData = req.body;
    const producto = await createProducto.execute(productData);
    res.status(201).send(producto);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await deleteProductoById.execute(id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).send("Producto no encontrado");
    }
});

router.put('/', async (req: Request, res: Response) => {
    const productData = req.body;
    const isUpdated = await modifyProducto.execute(productData);
    if (isUpdated) {
        res.status(200).send(true);
    } else {
        res.status(404).send("Producto no encontrado");
    }
});

export default router;
