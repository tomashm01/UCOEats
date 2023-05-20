import { User } from "../../Auth/domain/user";
import { Delivery } from "../../Delivery/domain/delivery";
import { createDelivery } from "../../Delivery/infraestructure/createDelivery";

export default function basketToDelivery(items: any, user: User) {
    let productos = items.map((item: any) => {
      return {
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        productos: {
          id: item.id,
          name: item.name,
        },
      };
    });
    const quantity = productos.reduce(
      (total: any, item: any) => total + item.quantity,
      0
    );
    let delivery: Delivery = {
      usuarios: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        phone: user.phone,
      },
      quantity: quantity,
      dateCreation: new Date().toISOString(),
      dateDelivery: new Date(
        new Date(new Date().toISOString()).getTime() + 15 * 60000
      ).toISOString(),
      state: "creado",
      productos: productos,
    };
    const newDelivery = { pedido: { ...delivery } };
    createDelivery(newDelivery);
  }