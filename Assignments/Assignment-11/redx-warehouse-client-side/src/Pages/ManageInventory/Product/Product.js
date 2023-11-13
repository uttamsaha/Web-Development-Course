import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {_id, name, img, description, quantity,supplierName, price} =  product;
    const navigate = useNavigate();
    const navigateToInventory = (id) => {
      navigate(`/inventory/${id}`);
    }

  return (
    <div data-aos="fade-up" className='outer-product'>
        <div className='product'>
        <img width={360} height={313} src={img} alt="" />
        <div className='product-info'>
        <h6>{name}</h6>
        <small><b>Price:</b> {price}৳</small> <br />
        <small>{description.slice(0,140)}</small>
        <p><b>Quantity:</b> {quantity}</p>
        <p><b>Supplier:</b> {supplierName}</p>
        </div>
        <button className='stock-btn' onClick={()=>navigateToInventory(_id)}>Stock Update</button>
    </div>
    </div>
  )
}

export default Product;