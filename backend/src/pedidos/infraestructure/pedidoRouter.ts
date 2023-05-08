import { Router, Request, Response } from "express";
import { PedidoMysqlController } from "./pedidoController";
import {
  GetPedidos,
  GetPedido,
  CreatePedido,
} from "../aplication";

const router = Router();

const pedidoRepository = new PedidoMysqlController();

const getPedidos = new GetPedidos(pedidoRepository);
const getPedido= new GetPedido(pedidoRepository);
const createPedido= new CreatePedido(pedidoRepository);

router.get('/', async (req: Request, res: Response) => {
  const pedidos = await getPedidos.execute();
  res.status(200).send({pedidos:pedidos.map((p)=>p.toDto())});
});

router.get('/:id',async(req: Request, res: Response)=>{
  const id=req.params.id;
  const pedido= await getPedido.execute(id);
  
  if(!pedido){
    res.status(404).send({message:"Pedido no encontrado",ok:false});
  }
  else{
    res.status(200).send({pedido:pedido.toDto(),ok:true});
  }
});

router.post('/', async (req: Request, res: Response) => {
  const pedido=req.body;
  const pedidoCreado = await createPedido.execute(pedido);

  if(!createPedido) res.status(400).send({message:"Error al crear el pedido",ok:false});
  else res.status(200).send({pedido:pedidoCreado.toDto(),ok:true});
});


export default router;