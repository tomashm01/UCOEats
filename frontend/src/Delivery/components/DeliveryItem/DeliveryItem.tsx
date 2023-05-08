import { Delivery } from "../../domain/delivery";
import "./DeliveryItem.css";
export default function DeliveryItem({ delivery }: { delivery: Delivery }) {

    return (
        <div className="delivery-item">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Información de factura</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{delivery.id}</td>
              <td>
                <p>{delivery.usuarios.name} {delivery.usuarios.surname}</p>
                <p>{delivery.usuarios.email.value}</p>
                <p>{delivery.usuarios.phone.value}</p>
              </td>
              <td>
                <p>Cantidad: {delivery.quantity}</p>
                <p>Fecha de creación: {delivery.dateCreation}</p>
                <p>Fecha de entrega: {delivery.dateDelivery}</p>
                <p>Estado: {delivery.state}</p>
                <table>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {delivery.productos.map((producto) => (
                      <tr key={producto.id}>
                        <td>{producto.producto.name}</td>
                        <td>{producto.quantity.value}</td>
                        <td>{producto.price.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    )
}