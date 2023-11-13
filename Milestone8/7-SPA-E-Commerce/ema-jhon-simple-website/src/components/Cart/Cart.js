import React from "react";
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    //finding total price using array reduce
    let total = 0;
    let shipping = 0;
    let quantity = 0; 
    for(const product of cart){
        quantity = quantity + product.quantity;
         total = total + product.price * product.quantity;
         shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2); //10% tax on total //toFixed return string
    const grandTotal = parseFloat(tax) + total + shipping;
    return (
        <div className="cart">
             <h4>Order Summary</h4>
            <p>Selected items: {quantity}</p>
            <p>Total price: ${total} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    )
}
export default Cart;