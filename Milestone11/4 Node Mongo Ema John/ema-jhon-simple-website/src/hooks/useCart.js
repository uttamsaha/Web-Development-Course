import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];

        const keys = Object.keys(storedCart);
        fetch('http://localhost:5000/productByKeys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(products => {
            console.log(products);
        })
    },[])
    return [cart, setCart];
}
export default useCart;