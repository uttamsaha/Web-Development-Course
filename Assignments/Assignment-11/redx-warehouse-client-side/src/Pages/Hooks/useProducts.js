import React, { useEffect, useState } from "react";

const useProducts = (allProducts) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://polar-lowlands-06321.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (allProducts) {
          setProducts(data);
        } else {
          setProducts(data.slice(0, 6));
        }
      });
  }, [products, allProducts]);
  return [products, setProducts];
};
export default useProducts;
