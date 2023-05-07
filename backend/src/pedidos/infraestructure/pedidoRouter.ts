import { Router, Request, Response } from "express";
import { PedidoMysqlController } from "./pedidoController";
import {
  GetPedidos,
} from "../aplication";
import { UsuarioMysqlController } from "../../usuarios/infraestructure/usuarioController";

const router = Router();

const pedidoRepository = new PedidoMysqlController();
const userRepository = new UsuarioMysqlController();

const getPedidos = new GetPedidos(pedidoRepository);

router.get('/', async (req: Request, res: Response) => {
    const pedidos = await getPedidos.execute();
    res.status(200).send(pedidos);
});


export default router;