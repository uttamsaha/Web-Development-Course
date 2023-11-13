import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hook/useFirebase";
import './Header.css'

const Header = () => {
    const {user, handleSignOut} = useFirebase();
    return (
      <div className="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/register">Register</Link>
          <span>{user?.displayName && user.displayName} </span> 
           {/* optional chaining use krsi displayName na epele error na dekhai jate se jonno */}
          {/* user.displayName thakle user.displayName ta dekhabo. */}
          {user?.uid ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    );
}
export default Header;