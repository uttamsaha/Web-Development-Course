import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts(); //calling useProducts function instead of useStates();

    const handleRemoveProduct = (product) => {
        console.log(product);
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id); //removing product form local storage 
    }

    const [cart, setCart] = useCart(products);
    return (
        <div className="shop-container">
            <div className="items-container">
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/shipment">
                        <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>
         
        </div>
    )
}
export default Orders;