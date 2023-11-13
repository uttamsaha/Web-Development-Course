import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1 className="welcome-text">Welcome to my fancy Routing Website</h1>
      <nav className="nav">
        <CustomLink to="/" className="a">
          Home
        </CustomLink>
        <CustomLink to="/friends" className="a">
          Friends
        </CustomLink>
        <CustomLink to="/about" className="a">
          About
        </CustomLink>
        <CustomLink to="/posts" className='a'>Posts</CustomLink>
      </nav>
    </div>
  );
};
export default Header;
