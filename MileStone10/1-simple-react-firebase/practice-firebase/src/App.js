import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import './App.css';
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const proiver = new GoogleAuthProvider();
  const proiver2 = new GithubAuthProvider();
  const [user, setUser] = useState({});
  const handleGoogleSingIn = () => {
    signInWithPopup(auth,proiver)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
  }
  const handleLogout = () => {
    setUser({})
  }

  //handle login with github

  const loginWithGithub = () => {
    signInWithPopup(auth, proiver2)
    .then(result => {
      setUser(result.user)
    })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSingIn}>Sign In with Google</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={loginWithGithub}>login with github</button>

      <h2>Name: {user.displayName}</h2>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
