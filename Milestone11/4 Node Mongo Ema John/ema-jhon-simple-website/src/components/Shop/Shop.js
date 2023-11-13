import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
    //kon page e achi seta mark korte
    const [page, setPage] = useState(0);
    //page size 
    const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${pageSize}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [page, pageSize]);


  const handleAddToCart = (selectedProduct) => {
    // console.log(product);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product._id !== selectedProduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id); //add prodduct details to localStorage
  };

  //useNavigate
  const navigate = useNavigate();
  const reviewOrderNavigate = () => {
    navigate("/orders");
  };


  //handle pageCOunt
  const [pageCount, setPageCount] = useState(0);
  useEffect(()=>{
      fetch('http://localhost:5000/productCount')
      .then(res => res.json())
      .then(data => {
          const count = data.count;
          const pages = Math.ceil(count/10);
          setPageCount(pages);
      })
  },[])


  console.log(pageCount);
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product._id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}

        <div className="pagination">
            {
                [...Array(pageCount).keys()].map(number => <button
                className={page===number ? 'selected' : ''}
                onClick={()=>setPage(number)}
                >{number+1}</button>)
            }
            {/* <button>HI</button> */}

            
            <select onChange={e => setPageSize(e.target.value)}>
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={reviewOrderNavigate}>Review Order</button>
        </Cart>
      </div>
    </div>
  );
};
export default Shop;
