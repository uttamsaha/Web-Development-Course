import React from 'react';
import './NotFound.css'
import {FaInstagram,FaLinkedinIn,FaTwitter,FaSkype} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div id="notfound">
		<div class="notfound">
			<div class="notfound-bg">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<h1>oops!</h1>
			<h2>Error 404 : Page Not Found</h2>
			<Link to="/home">Back to home</Link>
			<div class="notfound-social">
				<Link to="#"><FaInstagram></FaInstagram></Link>
				<Link to="#"><FaLinkedinIn></FaLinkedinIn></Link>
				<Link to="#"><FaTwitter></FaTwitter></Link>
				<Link to="#"><FaSkype></FaSkype></Link>
			</div>
		</div>
	</div>
    </div>
  )
}

export default NotFound;