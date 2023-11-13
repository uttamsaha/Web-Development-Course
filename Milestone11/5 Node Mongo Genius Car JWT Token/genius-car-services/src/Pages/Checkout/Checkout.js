import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../Hooks/useServiceDetail";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const {serviceId} = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  // console.log(user);

  const handlePlaceOrder = event => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.address.value
    }
    axios.post('http://localhost:5000/order',order)
    .then(response => {
      const {data} = response; //response theke data nicchi
      if(data.insertedId){
        toast('Your Order is Booked...');
        event.target.reset(); //reseting input field.
      }
      console.log(response);
    })

  }
  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {service.name}</h2>

      <form onSubmit={handlePlaceOrder}>
        <input className="w-100  form-control" type="text" name="name" value={user?.displayName} placeholder="Name" required readOnly disabled/> <br />
        <input className="w-100 form-control" type="email" name="email" value={user?.email} placeholder="email" required readOnly disabled/> <br />
        <input className="w-100 form-control" type="text" name="service" value={service?.name} placeholder="service" required readOnly disabled/> <br />
        <input className="w-100 form-control" type="text" name="address" placeholder="address" required autoComplete="off"/> <br />
        <input className="w-100 form-control" type="number" name="number" placeholder="number" required/> <br />
        <input className="btn btn-danger d-block mx-auto w-25" type="submit" value="Please Order" />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};
export default Checkout;
