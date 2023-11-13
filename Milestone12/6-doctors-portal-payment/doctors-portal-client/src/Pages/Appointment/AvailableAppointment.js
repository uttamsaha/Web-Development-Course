import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, "PP");

  //using react query
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(
      `https://vast-everglades-33938.herokuapp.com/available?date=${formatedDate}`
    ).then((res) => res.json())
  );
  //here availabe is a query name && formatedDate is dependacny here
  if (isLoading) {
    return <Loading></Loading>;
  }
  // useEffect(()=>{
  //     fetch(`https://vast-everglades-33938.herokuapp.com/available?date=${formatedDate}`)
  //     .then(res => res.json())
  //     .then(data => setServices(data))
  // },[formatedDate])

  return (
    <div>
      <h4 className="text-xl text-secondary text-center my-10">
        Available Appointments on: {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            service={service}
            key={service._id}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
      {/* jokhon treatement set hobe thokn booking er modal ta open korobo */}
    </div>
  );
};

export default AvailableAppointment;
