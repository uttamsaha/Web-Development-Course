import React from "react";
import './Product.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, price} = props.product;
    const {handleAddToCart} = props;
    return (
        <div className="product">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ৳{price}</h4>
            <button onClick={()=>handleAddToCart(props.product)}>ADD TO CART <FontAwesomeIcon 
            className="font-awesome" icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    )
}
export default Product;