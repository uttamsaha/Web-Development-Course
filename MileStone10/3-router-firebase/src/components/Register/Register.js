import React from "react";

const Register = () => {
  return <div>
      <h3>Please Register</h3>
      <form>
          <input type="email" placeholder="Your Email"/> <br />
          <input type="text" placeholder="Your Name.." /> <br />
          <input type="password" placeholder="password ..." /> <br />
          <input type="submit" value="Register" />

      </form>
  </div>;
};
export default Register;
