import React from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Checkout.css';

const Checkout = () => {
    const { checkoutId } = useParams();
    const handleSubmit = (event) => {
        event.preventDefault();
        toast('Thank you for the booking..');
        

    }
  return (
    <div className='checkout-container'>
        {/* <h2>This is checkout id {checkoutId}</h2> */}
        <h2 className='text-center text-danger pt-4'>Please Checkout</h2>
        <small className='d-block text-center mb-3 text-danger'>Your information to confirm your booking.</small>
        <form onSubmit={handleSubmit} className="w-100 d-flex flex-column align-items-center inputs mb-5">
            <input className='form-control' type="text" placeholder='Your name..'/>
            <input className='form-control' type="email" name="" id="" placeholder='Your email..' required/>
            <input className='form-control' type="number" name="" id="" placeholder='Your phone...' required/>
            <input className='form-control' type="text" name="" id="" placeholder='Your address..' required/>
            <input className='btn btn-danger' type="submit" value="Submit" />
        </form>
        <ToastContainer />
    </div>
  )
}

export default Checkout;