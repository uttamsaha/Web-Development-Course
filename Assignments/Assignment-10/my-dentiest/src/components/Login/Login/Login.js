import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { async } from "@firebase/util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  //redirecting to previous state after login
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user) {
    //redirecting after login
    navigate(from, { replace: true });
  }
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  //reset password
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Sent");
    } else {
      toast("Please Enter email to reset your password..");
    }
  };
  return (
 <div style={{'backgroundColor':'#FAF9F6 '}} className=" p-5">
      <div className="container w-50 mx-auto mt-5 bg-dark p-5 rounded-3">
      <h2 className="text-warning mb-3 text-center">Please Login</h2>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorElement}
        <Button
          variant="warning"
          type="submit"
          className="d-block mx-auto w-25 mb-3"
        >
          Login
        </Button>
      </Form>
      <p className="text-white p-0 m-0">
        New to My Dentist?  
        <Link to="/register" className="text-info text-decoration-none">
            Please Register
        </Link>
      </p>
      <p className="text-white p-0 m-0">
        Forget Password?
        <button
          className="btn btn-link text-info pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
 </div>
  );
};
export default Login;
