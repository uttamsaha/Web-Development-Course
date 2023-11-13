import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner/banner1.jpg';
import banner2 from '../../../Images/banner/banner2.jpg';
import banner3 from '../../../Images/banner/banner3.jpg';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="First slide" />
        <Carousel.Caption>
          <span className='text-white fw-bolder fs-2 bg-dark rounded-pill ps-2 pe-2'>WELCOME TO MY DENTIST</span> <br />
          <span className='text-white fw-bold bg-dark rounded-pill ps-2 pe-2'>Here you will get every kind of dentist related service from me.</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <span className='text-white fw-bolder fs-2 bg-dark rounded-pill ps-2 pe-2' >HI THERE, I'M DOCTOR JENIFER</span><br />
          <span className='text-white fw-bold bg-dark rounded-pill ps-2 pe-2'>I'm a dentist. You can visit me if you any kind of teeth related problem.</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="Third slide" />

        <Carousel.Caption>
          <span className='text-white fw-bolder fs-2 bg-dark rounded-pill ps-2 pe-2'>TEETH ARE THE WEALTH. TAKE CARE OF IT</span><br />
          <span className='text-white fw-bold bg-dark rounded-pill ps-2 pe-2'>
            Keep regular checkup of your teeth. Be careful about your teeth.
          </span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner;