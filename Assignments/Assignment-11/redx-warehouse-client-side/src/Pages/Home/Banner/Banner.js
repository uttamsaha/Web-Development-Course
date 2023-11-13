import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import slider1 from '../../../images/slider1.png';
import slider2 from '../../../images/slider2.png';
import slider3 from '../../../images/slider3.png';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-black bg-white d-inline-block fs-4 fw-bold p-1 rounded-3 display-none'>Welcome to RedX Warehouse</h3> <br />
          <span className='text-black bg-white d-inline-block mt-2 p-1 rounded-3 display-none'>This is an inventory management system</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='text-black bg-white d-inline-block fs-4 fw-bold p-1 rounded-3 display-none'>Welcome to RedX Warehouse</h3> <br />
          <span className='text-black bg-white d-inline-block mt-2 p-1 rounded-3 display-none'>Keeps track of products to make life easier.</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='text-black bg-white d-inline-block fs-4 fw-bold p-1 rounded-3 display-none'>Welcome to RedX Warehouse</h3> <br />
          <span className='text-black bg-white d-inline-block mt-2 p-1 rounded-3 display-none'>Thank for visiting our website. Have a good day.</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner;