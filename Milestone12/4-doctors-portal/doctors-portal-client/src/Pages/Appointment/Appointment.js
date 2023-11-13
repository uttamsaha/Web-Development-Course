import React, { useState } from 'react'
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date()); //geting today's date using new Date()
    //left up stage to share data in multiple children or siblings component. 
    //multiple component e data share kortesi
  return (
    <div>
        <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
        <AvailableAppointment date={date}></AvailableAppointment>
        <Footer></Footer>
    </div>
  )
}

export default Appointment;