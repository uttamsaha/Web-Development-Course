import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
    const products = [
        {id: 1, name: 'Laptop pro', price: 9000},
        {id: 1, name: 'Laptop koo', price: 8000},
        {id: 1, name: 'Laptop GOO', price: 7000},
    ]
    return (
      <div>
        <h2>This is my cart</h2>
        <button className="btn btn-primary">Love me</button>
        <button className="btn btn-dark">Black</button>
        {
            products.map(product => <Card product={product}
                key={product.id}
            ></Card>)
        }
      </div>
    );
}
export default CardGroup;