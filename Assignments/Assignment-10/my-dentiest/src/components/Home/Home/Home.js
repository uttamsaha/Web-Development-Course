import React from 'react'
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Doctor></Doctor>
        <Services></Services>
        <Contact></Contact>
    </div>
  )
}

export default Home;