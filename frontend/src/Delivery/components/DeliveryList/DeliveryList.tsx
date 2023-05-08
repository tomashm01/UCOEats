import React, { useEffect, useState } from 'react';
import { Delivery } from '../../domain/delivery';
import { getAllDeliveries } from '../../infraestructure/getAllDeliveries';
import DeliveryItem from '../DeliveryItem/DeliveryItem';


export default function DeliveryList() {
    const [deliveries, setDeliveries] = useState<Delivery[]>([]);

    useEffect(() => {
        const fetchDeliveries = async() => {
           const data = await getAllDeliveries();
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