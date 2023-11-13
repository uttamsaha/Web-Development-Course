import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product] //copyign cart element and adding new product to new cart array
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
               {
                   products.map(product => <Product 
                    product={product}
                     key={product.id}
                     handleAddToCart = {handleAddToCart}
                     ></Product>)
               }
            </div>

            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    )
}
export default Shop;