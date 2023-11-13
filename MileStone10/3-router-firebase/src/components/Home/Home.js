import React from "react";
import useFirebase from "../../hook/useFirebase";

const Home = () => {
    const {user} = useFirebase();
  return <div>
      <h1>This is home</h1>
      <p>Current user is: {user ? user.displayName : 'No user'}</p>
  </div>;
};
export default Home;
