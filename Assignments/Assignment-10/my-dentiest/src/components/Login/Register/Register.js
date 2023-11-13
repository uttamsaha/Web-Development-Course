import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from "@firebase/util";
import Loading from "../../Shared/Loading/Loading";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, error1] = useUpdateProfile(auth); //for update profile and name
const navigate = useNavigate();

const toggleReg = () => {
  navigate('/login');
}

if(loading || updating){
  return <Loading></Loading>
}


//handle register
const handleRegister = async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email,password);
    await updateProfile({ displayName: name});
          console.log('Updated profile');
          navigate('/');
  
}
  return (
    <div style={{'backgroundColor':'#FAF9F6	 '}} className="p-5" >
      <div className="register-form container w-50 mx-auto mt-5 bg-dark p-4 rounded-3">
      <h2 className="text-center text-white mb-3 p-2">Please Register</h2>
      <form onSubmit={handleRegister} className="w-50 mx-auto">
            <input className="form-control my-2" type="text" name="name" id="" required placeholder="Your Name: "/>
            <input className="form-control my-2" type="email" name="email" id="" required placeholder="Email.."/>
            <input className="form-control my-2" type="password" name="password" id="" required placeholder="password.."/>
            <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms"></input>
            <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms & Conditions</label> <br></br>
            <input disabled={!agree} className="btn btn-danger w-25 mt-3 mx-auto d-block mb-3" type="submit" value="Register" />

      </form>
      <p className="text-center text-white">Already have an account? <span onClick={toggleReg} className="text-info login-text">Please Login</span></p>
      <SocialLogin></SocialLogin>
      
    </div>
    </div>
  );
};
export default Register;
