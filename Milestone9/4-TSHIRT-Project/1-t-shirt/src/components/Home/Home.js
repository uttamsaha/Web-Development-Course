import React, { useState } from "react";
import Cart from "../Cart/Cart";
import useTshirts from "../Hooks/useTshirts";
import Tshirt from "../Tshirt/Tshirt";
import './Home.css'

const Home = () => {
    const [tShirt, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if(!exists){
                    const newCart = [...cart, selectedItem];
                    setCart(newCart);
        }
        else{
            alert('Item already added');
        }

    }
    const removeCart = (removedItem) => {
        console.log(removedItem);
       const updatedCart = cart.filter(cart => cart._id !== removedItem._id);
       setCart(updatedCart);
    }
  return (
      <div className="home-container">
          <div className="tshirt-container">
              {
                  tShirt.map(tShirt => <Tshirt
                  tShirt={tShirt}
                  key={tShirt._id}
                  handleAddToCart={handleAddToCart}></Tshirt>)
              }
          </div>
          <div className="cart-container">
              <Cart cart={cart}
              removeCart={removeCart}
              ></Cart>
          </div>
      </div>
  )
};
export default Home;
