import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
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

    //load data from local storage 
    useEffect(()=>{  //use effect for load local storage data
        const storedCart = getStoredCart();
        console.log(storedCart);
        const savedCart = [];
        for(const id in storedCart){
            const addedProducts = products.find(product => product.id === id);
            if(addedProducts){
                const quantity = storedCart[id]; // getting quantiy of id key.. 
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);
            }
        }
        setCart(savedCart);
    },[products]) // useEfferct ekbar call hoi just dependecney dewai porducts er value change howai useEffect bar bar call korbe jkn ei products er man change hoi..

    const handleAddToCart = (selectedProduct) => {
        // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart,  selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id); //add prodduct details to localStorage

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
               <Cart cart = {cart}></Cart>
            </div>
        </div>
    )
}
export default Shop;