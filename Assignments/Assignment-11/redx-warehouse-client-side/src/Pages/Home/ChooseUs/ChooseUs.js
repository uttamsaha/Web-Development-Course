import React from 'react';
import './ChooseUs.css';
import image from '../../../images/warehouse/choose/girl3.png';
import logo1 from '../../../images/choose/1.png';
import logo2 from '../../../images/choose/2.png';
import logo3 from '../../../images/choose/3.png';
import logo4 from '../../../images/choose/4.png';

const ChooseUs = () => {
  return (
    <div className='container'>
        <div className='choose-container'>
            <div  data-aos="fade-right" className='img'>
                <img src={image} alt="" />
            </div>
            <div  data-aos="zoom-in-right" className='choose-content'>
                <h3 className='heading'>WHY YOU SHOULD CHOOSE US?</h3>
                <p className='subheading'>We are proud to provide our clients with support to solve your problems and to ensure the continuous networking of your business.</p>
                <div className='choose-inner-container'>
                    <div className='choose-div'>
                        <img src={logo1} alt="" />
                        <h6>TRUSTED BY THOUSANDS</h6>
                        <p>We are trusted by clients. Our company slogan says it all, we will strive and are committed to provide a the maximum level of stability to our clients.</p>
                    </div>
                    <div className='choose-div'>
                        <img src={logo2} alt="" />
                        <h6>BUYING GUIDE</h6>
                        <p>These landing pages expose peoples struggles, show how your product helps, and acts as a 24/7 sales team that creates new business opportunities for you. </p>
                    </div>
                    <div className='choose-div'>
                        <img src={logo3} alt="" />
                        <h6>TGREAT SERVICE</h6>
                        <p>Major retailers like REI and Best Buy have been using buyers guides for years. While smaller brands tend to ignore them, this piece of content can work wonders.</p>
                    </div>
                    <div className='choose-div'>
                        <img src={logo4} alt="" />
                        <h6>24/7 SUPPORT</h6>
                        <p>At the start of the pandemic, we shifted our 24/7 Helpline operations to be remote. We enabled our enthusiastic volunteers to take calls and texts from their own homes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs;