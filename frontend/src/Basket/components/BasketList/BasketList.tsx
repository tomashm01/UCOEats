import BasketCard from "../BasketCard/BasketCard";
import { useBasket } from "../../providers/BasketContext";
import { useEffect, useState } from "react";
import { User } from "../../../Auth/domain/user";
import basketToDelivery from "../../services/basketToDelivery";
import colors from "../../../Shared/styles/colors";
import { useNavigate } from "react-router-dom";

function Modal({ children, isOpen, onClose }: any) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" role="dialog">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div className="mt-3 text-center sm:mt-5">{children}</div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentForm({
  items,
  user,
  clearBasket,
}: {
  items: any;
  user: any;
  clearBasket: Function;
}) {
  const navigate = useNavigate();
  const handleSubmit = (e:any) => {
    e.preventDefault();
    basketToDelivery(items, user);
    clearBasket();
    navigate("/ProductList");

  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        className={`mb-2 block text-sm font-bold text-${colors.textSecondary}`}
      >
        Número de tarjeta:
        <input
          className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
        />
      </label>
      <label
        className={`mb-2 block text-sm font-bold text-${colors.textSecondary}`}
      >
        Fecha de expiración (MM/AA):
        <input
          className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
        />
      </label>
      <label
        className={`mb-2 block text-sm font-bold text-${colors.textSecondary}`}
      >
        CVC:
        <input
          className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight bg-${colors.bgPrimary} shadow focus:outline-none text-black`}
        />
      </label>
      <button
        className="px-6 py-2 bg-green-500 text-white rounded-lg"
        type="submit"
      >
        Confirmar pago
      </button>
    </form>
  );
}

export default function BasketList({ userToken }: { userToken: User }) {
  const { basket, removeProduct, clearBasket } = useBasket();
  const [items, setItems] = useState(basket.items);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    setItems(basket.items);
  }, [basket]);

  const handleRemoveProduct = (productId: string) => {
    removeProduct(productId);
  };

  const handleBuy = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSubmit = () => {
    setIsPaymentModalOpen(false);
  };

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
          {basket.total > 0 && (
            <button
              className="px-6 py-2 bg-green-500 text-white rounded-lg"
              onClick={handleBuy}
            >
              Comprar
            </button>
          )}
        </div>
        <Modal isOpen={isPaymentModalOpen} onClose={handlePaymentSubmit}>
          <h2 className="text-2xl mb-4">Información de pago</h2>
          <PaymentForm
            items={items}
            user={userToken}
            clearBasket={clearBasket}
          />
        </Modal>
      </div>
    </div>
  );
}
