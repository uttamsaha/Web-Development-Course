import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>This is service{serviceId}</h2>
      <Link to="/checkout">
        <button className="btn btn-danger">Proceed Checkout</button>
      </Link>
    </div>
  );
};
export default ServiceDetail;
