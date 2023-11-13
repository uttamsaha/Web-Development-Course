import React from 'react';
import { add, multiply } from '../../utilities/Add';
const Shoes = () => {
    const first = 10, second = 20;
    //importing add method from utilities
    const price = add(first,second);
    const doublePrice = multiply(first,second);
    return (
        <div>
            <h1>Shoes price = {price}</h1>
            <p>Double price = {doublePrice}</p>
        </div>
    )
}
export default Shoes;