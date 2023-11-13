import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const [error, setError] = useState('');

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'; 

    //coppied from react fierbase hook documentation
   const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    //gettng email
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    //getting password
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
      navigate(from, {replace: true}); // jekhan theke login korse se khane niye jabe
    }

    //handle user login
    const handleUserSingIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>

        <form onSubmit={handleUserSingIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" required />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {
            //if loading
            loading && <p>Loading......</p>
          }
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-Jhon?{" "}
          <Link className="form-link" to="/signup">
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
