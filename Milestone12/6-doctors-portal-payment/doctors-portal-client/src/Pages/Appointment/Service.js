import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;

  //card from daisyui
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-center text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No slot Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p><small>Price: ${price}</small></p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            className=""
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="btn btn-secondary btn-sm text-white uppercase bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
          {/* slots length 0 hole button disable hobe */}
        </div>
      </div>
    </div>
  );
};

export default Service;
