import { ProductCardProps } from "../../domain/ProductCardProps";
import { getCategory } from "../../../Category/infreaestructure/getCategory";
import { useEffect, useState } from "react";

export default function ProductCard(props: ProductCardProps) {
  const { product, addProduct } = props;
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    async function fetchCategory() {
      const response = await getCategory(product.categoryID);
      if (response !== null) {
        setCategoryName(response.description);
      }
    }

    fetchCategory();
  }, [product.categoryID]);

  function useLinkClickHandler() {
    addProduct(product);
  }

  return (
    <div className="flex flex-col justify-between bg-white shadow-lg rounded-lg w-64 mx-auto">
      <div>
        <div className="h-56 w-full mb-4">
          <img
            src={product.imageURL}
            alt={product.name}
            className="h-full w-full rounded-t-lg object-cover"
          />
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">{product.name}</h3>
          <span className="text-gray-500 mt-2">{product.price}€</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-3 bg-gray-200 rounded-b-lg">
        <button
          className="px-3 py-1 bg-green-500 text-white text-xs font-bold uppercase rounded"
          onClick={() => {
            useLinkClickHandler();
          }}
        >
          Añadir
        </button>
        <span className="text-gray-800 font-bold">{categoryName}</span>
      </div>
    </div>
  );
}
