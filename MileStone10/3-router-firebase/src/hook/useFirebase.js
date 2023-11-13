import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        // console.log('Signin in soon');
        signInWithPopup(auth,googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            setUser(user);
        })
    },[])
    
//     ##onAuthStateChanged: eta use kora hoi ekjon use jodi login kore page reload dei se logout hoie jabe na..
// firebase track rakhe user ta login naki logout…
// useEffect er moddhe eta set korte hoi..
// -> setUser(user); page reload dileo login kra thakle again sei state e niye nai. login kora state e . usually firebase track rakhe user login naki logout. state e ache… state ta observe kore..


    //handle signOut
    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{})
    }

    return {user, setUser, signInWithGoogle, handleSignOut};
}
export default useFirebase;