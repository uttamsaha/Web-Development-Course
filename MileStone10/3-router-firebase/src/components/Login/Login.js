import React from "react";
import useFirebase from "../../hook/useFirebase";

const Login = () => {
     const {signInWithGoogle} = useFirebase();
  return (
    <div>
      <h1>Please login</h1>
      <div style={{margin:'25px'}}>
          <button onClick={signInWithGoogle}>Sign In With Google</button>
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
