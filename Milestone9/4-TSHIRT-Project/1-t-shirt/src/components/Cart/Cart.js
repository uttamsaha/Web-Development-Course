import React from "react";
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const {cart} = props;
    const {removeCart} = props;

    //conditional rendering
    //1. element varibale
    let command;
    if(cart.length === 0){
        command = <div> <p> Please Add Some items</p></div>
    }
    else if(cart.length === 1) {
        command = <p>Please add more</p>
    }
    else{
        command = <div><p><small>Thanks for adding items</small></p></div>
    }
    return (
        <div>
            <h2>Item selected: {cart.length}</h2>
           
            {
                cart.map(tShirt => <p>{tShirt.name}  
                <button onClick={()=>{removeCart(tShirt)}}> X</button></p>)
            }

            {cart.length === 0 || <p className="orange">You are buying.</p>}
            {cart.length === 3 && <div className="orange">
                <h3>3 items added</h3></div>}
             {command}
             {
                 cart.length !== 4 ? <div>
                     <p>Keep adding</p>
                 </div> : <div> <button>Remove All</button></div>
             }
            
        </div>
    )
}
export default Cart;