import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { sendEmailVerification } from "firebase/auth";


const SignUp = () => {
    //getting input filed value
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate(); // user make hole negiave korehome e navige korbo

    //user successfully created hole oporer er user e sei user ta pwa jabe
    //getting email
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    //getting password
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    //getting confirm password
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    //if user succesfully created
    if(user){
        navigate('/')
    }

    //handleCreateUser signUP createUser click on singup
    const handleCreateUser = event => {
       event.preventDefault(); // to prevent reload while sign up or login
        if(password !== confirmPassword){
            setError('Password & confirm password did not match');
            return;
        }
        else if(password.length < 6){
            setError('Password must be 6 characters');
            return;
        }
        //creating user
        createUserWithEmailAndPassword(email, password); //creating user 
    }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>

        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" required />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              required
            />
          </div>

          <p style={{ color: "red" }}>{error}</p>

          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
