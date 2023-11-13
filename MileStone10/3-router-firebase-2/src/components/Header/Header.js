import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import './Header.css'
const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
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
            <button onClick={() => signOut(auth)}>Sign Out</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    );
}
export default Header;