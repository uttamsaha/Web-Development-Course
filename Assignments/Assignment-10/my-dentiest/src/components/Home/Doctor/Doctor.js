import React from 'react'
import doctor from '../../../Images/doctor.png'
import './Doctor.css'

const Doctor = () => {
  return (
    <div className='container my-doctor'>
        <div className='doctor-container'>
            <div>
                <h1>WELCOME TO <span className='doctor-title'>MY DENTIST</span></h1>
                <h2>I'M DOCTOR <span className='doctor-title'> JENIFER</span></h2>
                <p>Hi there! I'm doctor Jenifer. I am a dentist. I have completed my MBBS from USA oxford University. I'm providing every services which are related to my dentist thing with low cost. So that you all people can take checkup. I'm available on Dhaka, Bananni Road no - 5. Kamal Avenue Room no - 112. If you need dentist related help or checkup feel free to visit me. Thank you.</p>
            </div>
            <div>
                <img src={doctor} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Doctor;