import './App.css';
import app from './firebase.init';
import {FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})

  const provider = new GoogleAuthProvider();
  const githubProivder = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const handleGoogleSignIn = () => {
    console.log('working');
    signInWithPopup(auth,provider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setUser(user);
    })
    .catch(error => {
      console.log(error);
    })
  }

  //hanlde signOut event
  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      setUser({}) 
    })
    .catch(error => {
      console.log(error);
    })
  }

  //handle github sign in
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProivder)
    .then(result => {
      const user = result.user;
      setUser(user);
    })
  }
  //handle facebook sign in
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.error(error);
    })
  }
  //handle github logout
  const logOutGithub = () => {
    setUser({})
  }
  return (
    <div className="App">
      {user.uid ? ( //user er jodi uid thake sthaole signout dekhabe
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
          <button onClick={logOutGithub}>Logout Github</button>
        </div>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
          <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
        </div>
      )}

      <h2>Name: {user.displayName}</h2>
      <p>Email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
