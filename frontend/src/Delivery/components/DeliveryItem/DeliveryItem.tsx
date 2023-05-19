import { Delivery } from "../../domain/delivery";export default function DeliveryItem({ delivery }: { delivery: Delivery }) {
  return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4">
          <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Delivery ID: {delivery.id}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                  Usuario: {delivery.usuarios.name} {delivery.usuarios.surname}
              </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                          Email
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                          {delivery.usuarios.email}
                      </dd>
                  </div>
                  <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                          Teléfono
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                          {delivery.usuarios.phone}
                      </dd>
                  </div>
                  <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                          Cantidad
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                          {delivery.quantity}
                      </dd>
                  </div>
                  <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                          Fecha de creación
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                          {delivery.dateCreation}
                      </dd>
                  </div>
                  <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                          Fecha de entrega
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                          {delivery.dateDelivery}
                      </dd>
                  </div>
                  <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                          Estado
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                          {delivery.state}
                      </dd>
                  </div>
              </dl>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <h4 className="text-lg font-medium text-gray-900">Productos</h4>
              {delivery.productos.map((producto) => (
                  <div key={producto.id} className="py-2">
                      <div className="text-sm text-gray-500">Producto: {producto.productos.name}</div>
                      <div className="text-sm text-gray-500">Cantidad: {producto.quantity}</div>
                      <div className="text-sm text-gray-500">Precio: {producto.price}</div>
                  </div>
              ))}
          </div>
      </div>
  )
}
