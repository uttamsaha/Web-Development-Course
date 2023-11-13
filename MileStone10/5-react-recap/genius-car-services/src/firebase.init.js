// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3rJtiNU5Pyi-6RBMORCGsuO8V-07pJpk",
  authDomain: "genius-car-services-1564c.firebaseapp.com",
  projectId: "genius-car-services-1564c",
  storageBucket: "genius-car-services-1564c.appspot.com",
  messagingSenderId: "170480558586",
  appId: "1:170480558586:web:3be8c2b6e4622fe7974443",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
