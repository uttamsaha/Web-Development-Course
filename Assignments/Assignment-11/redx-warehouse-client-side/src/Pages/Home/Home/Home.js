import React from 'react';
import Products from '../../ManageInventory/Products/Products';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Contact from '../Contact/Contact';
import Stock from '../Stock/Stock';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Stock></Stock>
        <Products></Products>
        <ChooseUs></ChooseUs>
        <Contact></Contact>
    </div>
  )
}

export default Home;