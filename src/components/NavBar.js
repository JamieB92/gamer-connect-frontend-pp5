import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from "../styles/NavBar.module.css"
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

function NavBar() {

  const currentUser = useCurrentUser()

  const loggedInIcons = <>{currentUser?.username}</>
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i class="fa-solid fa-right-to-bracket"></i> Sign In
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="signup"
      >
        <i class="fa-solid fa-user-plus"></i> Sign Up
      </NavLink>

    </>
  );

  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <Container> 
        <NavLink to="/">
          <Navbar.Brand><img src={logo} alt="Logo" height={50}/> GamerConnect</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
              <NavLink 
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/">
                <i class="fa-solid fa-house-chimney"></i> Home
              </NavLink>
              {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
      </Navbar.Collapse>
      </Container> 
    </Navbar>
  );
}

export default NavBar