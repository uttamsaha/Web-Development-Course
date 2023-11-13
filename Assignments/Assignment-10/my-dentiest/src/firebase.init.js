// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjexlPRZDT7yUevJ6G_4TAARm79st-3B4",
  authDomain: "my-dentist-5c77e.firebaseapp.com",
  projectId: "my-dentist-5c77e",
  storageBucket: "my-dentist-5c77e.appspot.com",
  messagingSenderId: "45428518353",
  appId: "1:45428518353:web:0f249712a96e814d6784f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;