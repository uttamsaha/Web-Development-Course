import React from "react";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
const auth = getAuth(app);

const Login = () => {
     const [signInWithGoogle, user] = useSignInWithGoogle(auth);
     const location = useLocation();
     const navigate = useNavigate();
     const from = location?.state?.from?.pathname || '/';
     const handleGoogleSignIn = () => {
       signInWithGoogle()
       .then(()=>{
         navigate(from, {replace: true})
       })
     }
  return (
    <div>
      <h1>Please login</h1>
      <div style={{margin:'25px'}}>
          <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" /> <br />
        <input type="password" placeholder="password ..." /> <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
export default Login;
