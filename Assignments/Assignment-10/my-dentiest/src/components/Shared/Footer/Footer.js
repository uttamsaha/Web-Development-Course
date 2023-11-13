import React from "react";
import logo from "../../../Images/logo.png";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook, AiOutlinePhone, AiFillMail } from "react-icons/ai";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import location from "../../../Images/location.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container text-white">
        <div className="wrapper-container">
          <div>
            <div className="logo-img-container">
              <img className="img-logo" src="favicon.jpg" alt="" />
            </div>
            <div>
              <p>
                <small>
                  Welcome to My Dentist. I'm a dentist specialist. If you face
                  any kind of problem you can visit me on my working hours.
                  Thank you.
                </small>
              </p>
            </div>
            <div className="social-icons">
              <AiFillLinkedin className="icons"></AiFillLinkedin>
              <AiFillTwitterSquare className="icons"></AiFillTwitterSquare>
              <AiFillFacebook className="icons"></AiFillFacebook>
            </div>
          </div>
        </div>

        <div className="wrapper-container">
          <div className="work-hour">
            <div>
              <h6>Work Hours</h6>
              <small>Monday : 8AM-7PM</small>
              <br />
              <small>Tuesday : 8AM-7PM</small> <br />
              <small>Wednesday : 8AM-7PM</small> <br />
              <small>Thursday : 8AM-7PM</small> <br />
              <small>Friday : 8AM-7PM</small> <br />
              <small>Saturday : 8AM-7PM</small>
              <br />
              <small>Sunday : CLOSED</small>
            </div>
          </div>
        </div>

        <div className="wrapper-container">
          <div>
            <div>
              <h6>Contact Info</h6>
            </div>
            <div className="contacts-container">
              <div>
                <AiOutlinePhone className="icons"></AiOutlinePhone>
              </div>
              <div>
                <small>+880175874555</small>
              </div>
            </div>
            <div className="contacts-container">
              <div>
                <HiOutlineMail className="icons"></HiOutlineMail>
              </div>
              <div>
                <a href="mailto:uttamsaha982@gmail.com">
                  <small>uttamsaha982@gmail.com</small>
                </a>
              </div>
            </div>
            <div className="contacts-container">
              <HiOutlineLocationMarker className="icons"></HiOutlineLocationMarker>
              <div>
                <a href="#">
                  <small>Dhaka, Bangladesh, Pabna</small>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-container">
          <div>
            <div>
              <h6>Our Location</h6>
              <img width={300} src={location} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area text-white d-flex align-items-center">
        <p>All Right Reserved My Dentist © 2022</p>
      </div>
    </div>
  );
};

export default Footer;
