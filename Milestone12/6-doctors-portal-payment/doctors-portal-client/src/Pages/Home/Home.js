import React from 'react'
import Banner from './Banner';
import Banner2 from './Banner2';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';

function Home() {
  return (
    <div>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Banner2></Banner2>
        <MakeAppointment></MakeAppointment>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Home;