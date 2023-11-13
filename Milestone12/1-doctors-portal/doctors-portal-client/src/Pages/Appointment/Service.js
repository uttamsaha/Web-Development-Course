import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;

  //card from daisyui
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="text-xl font-bold text-center text-secondary">{name}</h2>
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
        <div class="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            class=""
            onClick={() => setTreatment(service)}
            for="booking-modal"
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
