import { Router, Request, Response } from "express";
import { ProductoMysqlController } from "./productoController";
import { CategoriaMysqlController } from '../../categorias/infraestructure/categoriaContoller';
import {
  CreateProducto,
  ModifyProducto,
  DeleteProductoById,
  GetProducto,
  GetProductos,
} from "../aplication";


const router = Router();

const productoRepository = new ProductoMysqlController();
const categoriaRepository = new CategoriaMysqlController();

const createProducto = new CreateProducto(productoRepository,categoriaRepository);
const modifyProducto = new ModifyProducto(productoRepository);
const deleteProductoById = new DeleteProductoById(productoRepository);
const getProducto = new GetProducto(productoRepository);
const getProductos = new GetProductos(productoRepository);

router.get('/', async (req: Request, res: Response) => {
    const productos = await getProductos.execute();
    res.status(200).send(productos.map((producto) => producto.toDTO()));
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const producto = await getProducto.execute(id);
    if (producto) {
        res.status(200).send({
            producto: producto.toDTO(),
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Producto no encontrado",
            ok: false
        });
    }
});

router.post('/', async (req: Request, res: Response) => {
    const productData = req.body;
    const producto = await createProducto.execute(productData);
    if (producto) {
        res.status(200).send({
            producto:producto.toDTO(),
            message: "Producto subido",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Producto no subido correctamente",
            ok: false
        });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await deleteProductoById.execute(id);
    if (deleted) {
        res.status(200).send({
            message: "Producto eliminado",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Producto no encontrado",
            ok: false
        });
    }
});

router.put('/', async (req: Request, res: Response) => {
    const productData = req.body;
    const isUpdated = await modifyProducto.execute(productData);
    if (isUpdated) {
        res.status(200).send({
            message: "Producto actualizado",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Producto no encontrado",
            ok: false
        });
    }
});

export default router;
