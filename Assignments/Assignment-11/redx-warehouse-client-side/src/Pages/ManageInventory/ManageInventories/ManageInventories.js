import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import SingleInventoryItem from '../SingleInventoryItem/SingleInventoryItem';
import './ManageInventories.css';

const ManageInventories = () => {
    const [products,setProducts] = useProducts(true);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/addnewitem');
    }
  return (
   <div>
       <div className='text-center mt-4'>
           <h4 className='mb-3'>ADD YOUR INVENTORY ITEMS: </h4>
           <button onClick={handleNavigate} className='btn btn-danger d-block mx-auto'>Add New Item</button>
       </div>
       <h3 className='text-center mt-5'>All Inventories Items</h3>
        <div className='products-container'>
        <div className='products'>
            {
                products.map(product => <SingleInventoryItem product={product} key={product._id}></SingleInventoryItem>)
            }
        </div>
    </div>
   </div>
  )
}

export default ManageInventories;