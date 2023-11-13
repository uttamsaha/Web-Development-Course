import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, img, price, shipping, quantity} = props.product;
    const {product, handleRemoveProduct} = props;
    return (
      <div className="review-items">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="review-item-details-container">
          <div className="review-items-details">
            <p className="product-name" title={name}>
              {name.length ? name.slice(0, 20) + "..." : name}
            </p>
            <p>
              Price: <span className="orange-color">${price}</span>
            </p>
            <small>Shipping: ${shipping}</small>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="delete-container">
            <button onClick={()=>handleRemoveProduct(product)} className="delete-btn">
              <FontAwesomeIcon
                className="delete-icon"
                icon={faTrashAlt}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    );
}
export default ReviewItem;