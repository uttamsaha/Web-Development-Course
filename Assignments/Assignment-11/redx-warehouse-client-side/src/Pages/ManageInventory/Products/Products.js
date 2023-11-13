import React from 'react'
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import {HiArrowRight} from 'react-icons/hi';
import './Products.css'
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products] = useProducts(false);
    const navigate = useNavigate();
    const manageInventories = () => {
        navigate('/manageInventories');
    }
  return (
    <div>
        <h3 className='text-center mt-5'>Inventory Items</h3>
        <div className='products-container'>
            <div className='products'>
                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
        </div>
        <button onClick={manageInventories} className='btn btn-danger d-block mx-auto'>Manage Inventories <HiArrowRight/></button>
    </div>
  )
}

export default Products;