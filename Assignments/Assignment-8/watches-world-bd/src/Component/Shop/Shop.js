import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    let [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) => {
    const newCart = [...cart, product]
    if(newCart.length > 4){
        alert('You cannot add more than 4 products');
        return;
    }
    let addedProduct = cart.find(c => c.id === product.id );
    console.log(addedProduct);
    if(addedProduct){
        alert('Product already added you cannot add twice');
        return;
    }
    setCart(newCart);
    }
    const chooseAgain = () => {
        setCart([]);
        setRandom([]);
    }

    const [random, setRandom] = useState([])
    let randomSelection = [];
    const chooseOne = (oneProduct) => {
        let intRandom = Math.floor(Math.random() * cart.length) + 0;
        randomSelection = cart[intRandom];
        setRandom(randomSelection);
        
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart chooseAgain={chooseAgain} chooseOne={chooseOne} cart={cart}
                    random={random}></Cart>
                </div>
            </div>
        </div>
    )
}
export default Shop;