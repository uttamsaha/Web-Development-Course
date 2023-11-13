import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
  return (
    <section className='flex justify-center items-center' style={{
        background: `url(${appointment})`
    }}>
        <div className='flex-1 hidden lg:block'>
            <img className='mt-[-185px]' src={doctor} alt="" />
        </div>
        <div className='flex-1'>
            <h3 className='text-xl text-primary'>Appointment</h3>
            <h2 className='text-3xl text-white font-bold'>Make an Appointment Today</h2>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus omnis corrupti laboriosam assumenda veniam cum exercitationem accusamus repellendus iste excepturi aliquid dolore velit itaque, error maxime officia ipsam aspernatur fuga eum. Ipsam velit, temporibus in laboriosam incidunt delectus ullam nulla!</p>
            <PrimaryButton>Get Started</PrimaryButton>
        </div>
    </section>
  )
}

export default MakeAppointment;