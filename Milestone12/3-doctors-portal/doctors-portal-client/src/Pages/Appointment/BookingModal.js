import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";


const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);

  const formatedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    
    const booking = {
      treatmentId : _id,
      treatment: name,
      date: formatedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value

    }

    //insert booking data
    fetch('http://localhost:5000/booking',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.success){
        toast(`Appointment is set , ${formatedDate} at ${slot}`);
      }
      else{
        toast.error(`You already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
      }
      refetch(); //calling refetch function
       setTreatment(null); // to close modal setTreatment null
    })
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-5 justify-items-center mt-3"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              disabled
              className="input input-bordered w-full max-w-xs"
              value={user?.displayName || ""}
            />
            <input
              type="email"
              disabled
              className="input input-bordered w-full max-w-xs"
              value={user?.email || ""}
            />
            <input
              type="number"
              placeholder="Your phone"
              className="input input-bordered w-full max-w-xs"
              name="phone"
            />
            <input
              type="submit"
              className="btn btn-secondary w-full max-w-xs"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
