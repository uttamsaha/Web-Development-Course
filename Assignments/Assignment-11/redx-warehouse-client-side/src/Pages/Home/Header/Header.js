import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
}
  return (
    <Navbar className="header" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand as={Link} to="home">RedX Warehouse</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="home">Home</Nav.Link>
        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
        <Nav.Link as={Link} to="aboutus">About us</Nav.Link>
        {
          user ? <>
          <Nav.Link as={Link} to="manageInventories">Manage Items</Nav.Link>
          <Nav.Link as={Link} to="addnewitem">Add Item</Nav.Link>
          <Nav.Link as={Link} to="myitems">My Items</Nav.Link>
          <button onClick={handleSignOut} className="signOut-btn">Sign Out</button>
          </>
          :
          <Nav.Link as={Link} to="login">Login</Nav.Link>
        }
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
