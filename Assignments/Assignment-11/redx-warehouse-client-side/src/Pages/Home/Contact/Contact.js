import React from "react";
import "./Contact.css";
import image from '../../../images/warehouse.jpg';
import {HiArrowRight,HiOutlineMailOpen,HiOutlineLocationMarker} from 'react-icons/hi';
import {FaInstagram} from 'react-icons/fa';
import {MdOutlinePhone} from 'react-icons/md';
import {FiTwitter,FiFacebook} from 'react-icons/fi';

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13828.69184583748!2d-90.08166771880984!3d29.94570320382167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a5de92c73877%3A0xa360b21dcb828b9f!2sWarehouse%20District%2C%20New%20Orleans%2C%20LA%2C%20USA!5e0!3m2!1sen!2sbd!4v1651468085380!5m2!1sen!2sbd";
  return (
    <div className="contact-container">
      <div>
        <h5>HOW TO FIND US</h5>
        <h1>Contacts</h1>
        <div  data-aos="zoom-in-right" className="contact-area">
          <div className="hr"></div>
          <div className="map">
            <iframe src={map}></iframe>
          </div>
          <div>
            <p> 
                <HiOutlineLocationMarker className="icons"></HiOutlineLocationMarker>
              Race Event BeFaster, UK, <br></br>2292 Peachtree Rd NW
            </p>
            <p>
                <HiOutlineMailOpen className="icons"></HiOutlineMailOpen>
                hello@redrockepic.com</p>
            <p>
              <span><MdOutlinePhone className="icons"></MdOutlinePhone>+1 800 787 7012 </span><br />
              <span><MdOutlinePhone className="icons"></MdOutlinePhone>+1 800 787 6085 </span>
            </p>
            <p>
            <FiFacebook className="icons"></FiFacebook>
                facebook.com/redrockxcm <br />
            <FiTwitter className="icons"></FiTwitter>twitter.com/redrockepic <br />
           <FaInstagram className="icons"></FaInstagram> instagram.com/redrockxcm 
            </p>
                
          </div>
        </div>
      </div>
      <div  data-aos="fade-up" className="contact-us">
      <div>
        <h5 className="contact-title">ANY QUESTIONS OR SUGGESTIONS?</h5>
        <h1 className="contact-subtitle">Write us</h1>
        <div className="contact-us-container">
          <div className="hr"></div>
          <div className="contact-info">
              <p>If you have any question you can send us your message by fill up the forms.  We will be very happy to hear from you.</p>

              <form>
                  <input className="name" type="text"  placeholder="Enter name" required/> <br />
                  <input className="email" type="email" placeholder="Enter email" required/> <br />
                  <textarea className="msg" name="" id="" cols="22" rows="4" placeholder="Enter your message"></textarea> <br />
                  <button>Submit <HiArrowRight></HiArrowRight></button>
              </form>
          </div>
          <div className="contact-image">
              <img src={image} alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
