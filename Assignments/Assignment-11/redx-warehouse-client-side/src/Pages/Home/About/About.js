import React from 'react';
import image from '../../../images/warehouse/warehouse11.webp';
import './About.css';
const About = () => {
  return (
    <div className='container'>
        <div className='div-container'>
            <div className='about'>
                <h1 className='title1'>WELCOME TO</h1>
                <h1 className='title'>REDX WAREHOUSE</h1>
                <p className='about-info'>Welcome to RedX Warehouse. This is a inventory management system. Here we keep track of our products to make easier the maintenance. So that we can keep tracking on real time.  We have more than 600 branches which provide some services. We supply Bike, Cycle, Car, Truck to every company. Thank you so much for visiting our website. Have a good day!</p>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
            </div>
            <div>
                <img className='about-image' src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About;