import React, { useEffect, useState } from "react";

const useProduct = (productId) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://polar-lowlands-06321.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, product]);

  return [product, setProduct];
};
export default useProduct;
