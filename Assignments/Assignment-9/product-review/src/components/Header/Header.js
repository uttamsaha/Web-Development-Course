import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css'
const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <div>
          <h2 className="menu-title">CAR-SHOP-BD</h2>
        </div>
        <div className="nav-items">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/reviews">Reviews</CustomLink>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink className="about" to="/about">About</CustomLink>
        </div>
      </div>
    </nav>
  );
};
export default Header;
