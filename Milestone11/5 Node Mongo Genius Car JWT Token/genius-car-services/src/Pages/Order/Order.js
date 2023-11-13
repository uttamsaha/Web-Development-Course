import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    //fetch load data using async await //implement this using normal fetch
    const getOrders = async() => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`; //search query email diye nijer odres kuje pabe..
     try{
      const {data} = await axios.get(url,{
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setOrders(data);
     } catch(error){
       //error code paile logout page e niye jabe token edit korle ba chang korle..
       console.log(error);
       if(error.response.status === 403 || error.response.status === 401){
         signOut(auth);
         navigate('/login');
       }
     }
    }
    getOrders();
  },[])
  return (
    <div>
        <h2>Your Orders: {orders.length}</h2>
    </div>
  )
}

export default Order;