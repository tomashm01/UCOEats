import { Router, Request, Response } from "express";
import { PedidoMysqlController } from "./pedidoController";
import {
  CreatePedido,
  ModifyPedido,
  DeletePedidoById,
  GetPedido,
  GetPedidos,
} from "../aplication";

const router = Router();

const pedidoRepository = new PedidoMysqlController();

const createPedido = new CreatePedido(pedidoRepository);
const modifyPedido = new ModifyPedido(pedidoRepository);
const deletePedidoById = new DeletePedidoById(pedidoRepository);
const getPedido = new GetPedido(pedidoRepository);
const getPedidos = new GetPedidos(pedidoRepository);

router.get('/', async (req: Request, res: Response) => {
    const pedidos = await getPedidos.execute();
    res.status(200).send(pedidos);
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const pedido = await getPedido.execute(id);
    if (pedido) {
        res.status(200).send(pedido);
    } else {
        res.status(404).send("Pedido no encontrado");
    }
});

router.post('/', async (req: Request, res: Response) => {
    const deliveryData = req.body;
    const pedido = await createPedido.execute(deliveryData);
    res.status(201).send(pedido);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await deletePedidoById.execute(id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).send("Pedido no encontrado");
    }
});

router.put('/', async (req: Request, res: Response) => {
    const pedidoData = req.body;
    const isUpdated = await modifyPedido.execute(pedidoData);
    if (isUpdated) {
        res.status(200).send(true);
    } else {
        res.status(404).send("Pedido no encontrado");
    }
});

export default router;