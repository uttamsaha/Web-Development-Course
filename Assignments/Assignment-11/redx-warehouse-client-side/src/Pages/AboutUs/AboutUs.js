import React from 'react';
import './AboutUs.css';
import img from '../../images/about.png';
import {MdOutlinePhone} from 'react-icons/md';

const AboutUs = () => {
  return (
    <div className='about-us-container container'>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <div className='about-us-info'>
                <h1>About Us</h1>
                <div className='horizontal-bar'></div>
                <p className='details'>Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing.</p>

                <p className='details2'><b>He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.</b></p>
                <p className='about-us-phone'><MdOutlinePhone/> +1 (304) 214-5458</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;