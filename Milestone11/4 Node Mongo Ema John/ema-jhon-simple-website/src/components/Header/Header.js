import React from "react";
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth); // user k pete hole any time eta call korte hoi..

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
      <nav className="header">
        <img src={logo} alt="" />
        <div className="navigation">
          <Link to="/shop">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          {user ? <button onClick={handleSignOut}>Sign Out</button> : <Link to="/login">Login</Link>}
        </div>
      </nav>
    );
}
export default Header;