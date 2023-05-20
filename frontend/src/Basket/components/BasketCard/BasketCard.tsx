import { useState } from "react";
import "./BasketCard.css";

export default function BasketCard(props: any) {
  const { info, onRemoveProduct } = props;

  return(
    <div className="flex items-center bg-white shadow-lg rounded-lg p-5 mb-4" id={info.id}>
        <div className="flex-shrink-0">
            <img className="h-12 w-12" src={info.imageURL} alt={info.name}/>
        </div>
        <div className="ml-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{info.name}</h3>
        </div>
        <div className="ml-auto flex items-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mr-3">${info.price}</h3>
            <h3 className="text-lg leading-6 font-medium text-gray-900">x{info.quantity}</h3>
        </div>
        <button className="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => onRemoveProduct(info.id)}>Restar 1</button>
    </div>
  );
}
