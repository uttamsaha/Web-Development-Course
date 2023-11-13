import React from "react";
import { addToDB, removeFromDB } from "../../utilities/LocalStorage";

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;
    const AddToCart = (id) => {
        console.log('item added',id,name);
        // localStorage.setItem(id,name);  //add to local storage 
        addToDB(id); // addToDB imported from utilites..
    }

    const removeFromCart = (id) => {
        removeFromDB(id);
    }

    

    return (
        <div style={{margin:'10px', backgroundColor:'salmon',padding:'20px'}}>
            
            <h4>Product id: {id}</h4>
            <h5>Name: {name}</h5>
            <h5>Price = {price}</h5>
            <button onClick={()=>AddToCart(id,name)}>Add to Cart</button> 
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    )
}
export default Cosmetic;