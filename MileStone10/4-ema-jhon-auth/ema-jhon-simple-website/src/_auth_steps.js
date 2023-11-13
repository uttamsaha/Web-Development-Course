/*
 1. create a new project in console.firebase.google.com
 2. register web app 
 3. npm install firebase
 4. create firebase.init.js && paste config file -> config file e halka edit korbo -> // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

5. go to firebase -> authentication -> enable email password auth

6. create login , sing up component setup route.
7. attach form filed handler and form submit handler 
8. npm install --save react-firebase-hooks
9. useCreateUserWithEmailAndPassword from react-firebase-hooks

10. if user is created redirect to the expected page.
11. useSignInWithEmailAndPassword from react firebase hooks

12. create require auth component  => user login thakle jete dibo na takle login page e jabe..
13. protected component

*/