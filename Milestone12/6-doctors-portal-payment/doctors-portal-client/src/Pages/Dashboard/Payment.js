import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1XjvAJXZsYMUoh16ywHrPUyysvOivaZ9Q3Jo4KTpS0CxgxZd57SUUXUwbYUG2TPAktUd9p46rsEXLkVs2hF8QW00Vuv3WrX0"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  //use Query te booking r id ekta array te raktesi karon ekhaen dependency ta hocce id.. ekek datar jonno id alada data load korbe.
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-2xl">
            Hello,{" "}
            <span className="font-bold text-success">
              {appointment.patientName}
            </span>
          </p>
          <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
          <p>
            Your appointment{" "}
            <span className="text-orange-700">{appointment.date}</span> at{" "}
            <span className="text-orange-700">{appointment.slot}</span>
          </p>
          <p>Please pay : ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment}/>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
