import BasketCard from "../BasketCard/BasketCard";
import { useBasket } from "../../providers/BasketContext";
import { useEffect, useState } from "react";
import { Delivery } from "../../../Delivery/domain/delivery";
import { User } from "../../../Auth/domain/user";
import { Basket } from "../../domain/Basket";
import { createDelivery } from "../../../Delivery/infraestructure/createDelivery";

function basketToDelivery(items: any, user: User) {
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

export default function BasketList({ userToken }: { userToken: User }) {
  const { basket, removeProduct } = useBasket();
  const [items, setItems] = useState(basket.items);

  const handleRemoveProduct = (productId: string) => {
    removeProduct(productId);
  };

  useEffect(() => {
    setItems(basket.items);
  }, [basket]);

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <h1 className="text-3xl mb-6">Carrito</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="space-y-4">
          {items.map((producto: any, index: any) => (
            <BasketCard
              key={index}
              info={producto}
              onRemoveProduct={handleRemoveProduct}
            />
          ))}
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl mb-4">Total:</h1>
          <h1 className="text-xl mb-6">{basket.total}€</h1>
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg"
            onClick={() => basketToDelivery(items, userToken)}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
