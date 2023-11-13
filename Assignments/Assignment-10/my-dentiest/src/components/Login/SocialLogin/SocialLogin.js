import React from "react";
import google from "../../../Images/social/google.png";
import github from "../../../Images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";



const SocialLogin = () => {
  let errorElement;
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }
  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (user || user1) {
    navigate("/home");
  }

  return (
    <div className="d-block mx-auto">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-danger w-50"></div>
        <p className="mt-2 px-2 text-white">or</p>
        <div style={{ height: "1px" }} className="bg-danger w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-flex align-items-center justify-content-center mx-auto my-2"
        >
          <img width={30} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-flex align-items-center justify-content-center mx-auto m-2"
        >
          <img width={30} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};
export default SocialLogin;
