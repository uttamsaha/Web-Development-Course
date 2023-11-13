import React from "react";
import './Service.css'
const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h4 className="mt-2">{name}</h4>
            <p>Price : {price}</p>
            <p><small>{description}</small></p>
            <button className="btn btn-dark">Book {name}</button>
        </div>
    )
}
export default Service;