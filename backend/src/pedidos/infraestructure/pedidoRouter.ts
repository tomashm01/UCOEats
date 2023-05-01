import { Router, Request, Response } from "express";
import { PedidoMysqlController } from "./pedidoController";
import {
  CreatePedido,
  ModifyPedido,
  DeletePedidoById,
  GetPedido,
  GetPedidos,
} from "../aplication";
import { UsuarioMysqlController } from "../../usuarios/infraestructure/usuarioController";

const router = Router();

const pedidoRepository = new PedidoMysqlController();
const userRepository = new UsuarioMysqlController();

const createPedido = new CreatePedido(pedidoRepository, userRepository);
const modifyPedido = new ModifyPedido(pedidoRepository);
const deletePedidoById = new DeletePedidoById(pedidoRepository);
const getPedido = new GetPedido(pedidoRepository);
const getPedidos = new GetPedidos(pedidoRepository);

router.get('/', async (req: Request, res: Response) => {
    const pedidos = await getPedidos.execute();
    res.status(200).send(pedidos.map((pedido) => pedido.toDTO()));
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const pedido = await getPedido.execute(id);
    if (pedido) {
        res.status(200).send({
            pedido: pedido.toDTO(),
            message: "Pedido encontrado",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Pedido no encontrado",
            ok: false
        });
    }
});

router.post('/', async (req: Request, res: Response) => {
    const deliveryData = req.body;
    const pedido = await createPedido.execute(deliveryData);
    if (pedido) {
        res.status(200).send({
            pedido: pedido.toDTO(),
            message: "Pedido insertado",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Pedido no insertado correctamente",
            ok: false
        });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await deletePedidoById.execute(id);
    if (deleted) {
        res.status(200).send({
            message: "Pedido eliminado",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Pedido no eliminado correctamente",
            ok: false
        });
    }
});

router.put('/', async (req: Request, res: Response) => {
    const pedidoData = req.body;
    const isUpdated = await modifyPedido.execute(pedidoData);
    if (isUpdated) {
        res.status(200).send({
            message: "Pedido actualizado",
            ok: true
        });
    } else {
        res.status(404).send({
            message: "Pedido no actualizado correctamente",
            ok: false
        });
    }
});

export default router;