import React, { useEffect, useState } from 'react';
import { Delivery } from '../../domain/delivery';
import { getAllDeliveries } from '../../infraestructure/getAllDeliveries';
import DeliveryItem from '../DeliveryItem/DeliveryItem';
import { User } from '../../../Auth/domain/user';


export default function DeliveryList({userToken}:{userToken:User}) {
    const [deliveries, setDeliveries] = useState<Delivery[]>([]);

    useEffect(() => {
        const fetchDeliveries = async() => {
           let data = await getAllDeliveries();
           if(userToken.type === "user"){
            //filtra para que solo muestre los de ese usuario
            data = data.filter((delivery:Delivery) => delivery.usuarios.id === userToken.id);
            }
           setDeliveries(data);
        };
        
        fetchDeliveries();
          
    }, []);

    return (
        <div className="delivery-list">
            <h2>Lista de Deliverys</h2>
            {deliveries.map((delivery) => (
               <DeliveryItem key={delivery.id} delivery={delivery} />
            ))}
        </div>
    );
}