import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>CAR SHOP BD</h1>
      <p>Copyright © 2022 Car Shop BD</p>
      <p>All Right Reserved</p>
      <div className="social-icons">
        <a href="/home">
          <FaFacebook></FaFacebook>
        </a>
        <a href="/home">
          <FaGithub></FaGithub>
        </a>
        <a href="/home">
          <FaTwitter></FaTwitter>
        </a>
        <a href="/home">
          <FaYoutube></FaYoutube>
        </a>
      </div>
    </div>
  );
};
export default Footer;
