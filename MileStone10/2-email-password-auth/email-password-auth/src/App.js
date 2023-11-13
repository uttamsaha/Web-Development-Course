import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile}  from "firebase/auth"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import app from "./firebase.init";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // pass string that's why default value empty string
  const [name, setName] = useState('');
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleEmailBlur = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  const handlePasswordBlur = (event) => {
    
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  const handleNameBlur = (event) => {
    setName(event.target.value);
  }
  const handleFormSubmit = (event) => {
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    // //checking password using regx
    // if (!/(?=[^!@#$&*]*[!@#$&*])/.test(password)) {
    //   setEmail('Password Should Contain At least one special character')
    //   return; //pass special char contain na korle next e jabe na firebase o jabe na return kre dibe.
    // }

    setValidated(true);
    // setError("");
  
    if(registered){
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        setError(error.message)
      })
    }
    else{
       createUserWithEmailAndPassword(auth, email, password)
         .then((result) => {
           const user = result.user;
           console.log(user);
           setEmail(""); //registration hoie gele email pass empty hoie jabe..
           setPassword("");

           //call verify email after user create
           verifyEmail();
           setUsername();
         })
         .catch((error) => {
           console.log(error);
           setError(error.message);
         });
    }

    console.log("form submitted");
    event.preventDefault(); //to prevent page reload
   
  }

  //handle registered changed
  const handleRegisteredChange = (event) => {
    setRegistered(event.target.checked);
  }

  //password reset: 
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      alert('Email send');
    })
  }
  //verify Email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      console.log('Email verification sent');
    })
  }

  //set username 
  const setUsername = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
    .then(()=>{
      console.log('Updated name successfully');
    })
    .catch(error => {
      setError(error.message);
    })
  }
  return (
    <div>
      {/* <form onSubmit={handleFormSubmit} action="">
        <input onBlur={handleEmailBlur} type="email" name="" id=" " /> <br />
        <input onBlur={handlePasswordBlur} type="password" name="" id="" /> <br />
        <input type="submit" value="Login" />
      </form> */}

      <div className="registration w-50 m-auto mt-5">
        <h2 className="text-primary">
          Please {registered ? "Login" : "Registerer"}
        </h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {!registered && (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name: </Form.Label>
              <Form.Control
                onBlur={handleNameBlur}
                type="email"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={handleRegisteredChange}
              type="checkbox"
              label="Already registered?"
            />
          </Form.Group>
          <p className="text-danger">{error}</p>
          <Button onClick={handlePasswordReset} variant="link">
            Forgot Password?
          </Button>{" "}
          <br />
          <Button variant="primary" type="submit">
            {registered ? "Login" : "Register"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
