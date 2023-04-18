import './ProductCard.css'
import {ProductCardProps} from '../../domain/ProductCardProps';

export default function ProductCard(props:ProductCardProps){
    const {product,addProduct} = props;

    function useLinkClickHandler(){ 
        addProduct(product)
    }


return (
<div className="card-wrapper">
  <div className="card">
  <div className="image-wrapper">
    <img src={product.imageURL} alt="" className="image" />
  </div>
  <div className="content-wrapper">
    <div className="title">
      <h4>{product.name}</h4>
    </div>
    <div className="price">
      {product.price}€
    </div>
    <div className="actions">
      <button className="button flip green-solid cart" onClick={()=>{useLinkClickHandler()}}>
        <span className="front">Añadir</span>
      </button>
      <span className="black-simple">{product.category}</span>
    </div>
  </div>
</div>
</div>
    )
    
}
