import React from "react";
import { useNavigate } from "react-router-dom";
import './Service.css'
const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
      <div className="service">
        <img src={img} alt="" />
        <h4 className="mt-2">{name}</h4>
        <p>Price : {price}</p>
        <p>
          <small>{description}</small>
        </p>
        <button
          onClick={() => navigateToServiceDetail(id)}
          className="btn btn-dark position-relative bottom-0"
        >
          Book {name}
        </button>
      </div>
    );
}
export default Service;