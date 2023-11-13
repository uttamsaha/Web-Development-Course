import React from "react";
import { CardGroup } from "react-bootstrap";
import Cards from "../Cards/Cards";
const CardGroups = () => {
    const products = [
        {id:1, name:'Laptop koo koo', price:9000},
        {id:2, name:'Laptop koo Go', price:9000},
        {id:3, name:'Laptop koo kMooo', price:7800},
    ]
    return (
       <div>
           <CardGroup>
               {
                   products.map(product => <Cards product={product}></Cards>)
               }
           </CardGroup>
       </div>
    )
}
export default CardGroups;