import { useState } from 'react';
import './BasketCard.css'


export default function BasketCard(props:any){
       const { info, onRemoveProduct } = props;

       return(
              <div className="carro-card" id={info.id}>
                     <div className="left-card">
                            <img src={info.imageURL}/>
                            <h3>{info.name}</h3>
                     </div>
                     <div className="right-card">
                            <h3>{info.price}</h3>
                            <h3>x{info.quantity}</h3>
                     </div>
                     <button onClick={() => onRemoveProduct(info.id)}>Restar 1</button>
              </div>
       )
}
