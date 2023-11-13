// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa3X7Kn5jNd72h7NPh6YuX-RrlaJWK0OU",
  authDomain: "ema-jhon-simple-c1b78.firebaseapp.com",
  projectId: "ema-jhon-simple-c1b78",
  storageBucket: "ema-jhon-simple-c1b78.appspot.com",
  messagingSenderId: "4340438197",
  appId: "1:4340438197:web:33a70298375795c51edafc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;