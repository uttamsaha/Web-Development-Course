import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
  return (
    <div id="services" className="container">
      <h1 style={{'color':'#44A3FF'}} className="service-title mt-5 mb-4">My Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
