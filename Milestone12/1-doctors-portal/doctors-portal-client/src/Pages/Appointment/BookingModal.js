import { format } from "date-fns";
import React from "react";

const BookingModal = ({date, treatment, setTreatment}) => {
    const {_id,name, slots} = treatment;

    const handleBooking = (event) => {
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(slot);
      setTreatment(null); // to close modal setTreatment null

    }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
          
        <div class="modal-box">
        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg text-secondary">
           Booking for: {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5 justify-items-center mt-3">
          <input type="text" disabled value={format(date, "PP")}class="input input-bordered w-full max-w-xs" />
          <select name="slot" class="select select-bordered w-full max-w-xs">
            {
              slots.map(slot => <option value={slot}>{slot}</option>)
            }
          </select>
          <input name="name" type="text" placeholder="Your name" class="input input-bordered w-full max-w-xs" />
          <input type="email" placeholder="Your email" class="input input-bordered w-full max-w-xs" />
          <input type="number" placeholder="Your phone" class="input input-bordered w-full max-w-xs" />
          <input type="submit" class="btn btn-secondary w-full max-w-xs" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
