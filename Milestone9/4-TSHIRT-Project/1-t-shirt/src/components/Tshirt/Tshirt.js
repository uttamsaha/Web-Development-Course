import React from "react";  
import './Tshirt.css'

const Tshirt = ({tShirt, handleAddToCart}) => {
    const {name, price, picture} = tShirt;
    // const {handleAddToCart} = props;
    return (
        <div className="t-shirt">
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>{handleAddToCart(tShirt)}}>Add to Cart</button>
        </div>
    )
}
export default Tshirt;