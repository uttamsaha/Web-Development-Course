import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

/*
payments step:
1. install stripe react strip js
2. Open stripe account on stripe website
3. get publishable key
4. create elements wrapper using publishable key
5. create Checkout from using card element , useStripe, useElements
6. get card element info

7. get credit card info/error + display card error if any
8. get client secret form backend via payment intent 
9. store client secret on the cient side
*/

const CheckoutForm = ({appointment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState('');
  const {price} = appointment;

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ price })
    })
        .then(res => res.json())
        .then(data => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        });

}, [price])
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return; // data na pele kar jonno payemnt krsi na pele return kore dibo
    }

    const card = elements.getElement(CardElement); //card er j data dicchi ekhane card setake extract kore niye astache

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card, //card contain cards detials user info
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-s mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
