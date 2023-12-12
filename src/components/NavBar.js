import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import UserAvatar from "./UserAvatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

function NavBar() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i class="fa-solid fa-plus"></i> Create
    </NavLink>
  );
  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i class="fas fa-stream"></i> Feed
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
        onClick={() => {}}
      >
        <i class="fas fa-heart"></i> Liked
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <UserAvatar
          src={currentUser?.profile_avatar}
          text=" Profile"
          height={38}
        />
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/contact/create"
      >
        <i className="fa-brands fa-hire-a-helper"></i>
        Contact
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/games/"
      >
        <i className="fa-solid fa-gamepad"></i>
        Games
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fa-solid fa-right-to-bracket"></i> Sign In
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
    <Navbar
      expanded={expanded}
      expand="lg"
      fixed="top"
      className={styles.NavBar}
    >
      <NavLink to="/">
        <Navbar.Brand>
          <img src={logo} alt="Logo" height={45} /> GamerConnect
        </Navbar.Brand>
      </NavLink>

      <Navbar.Toggle
        ref={ref}
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-right">
          <NavLink
            exact
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/"
          >
            <i class="fa-solid fa-house-chimney"></i> Home
          </NavLink>
          {currentUser && addPostIcon}
          {currentUser ? loggedInIcons : loggedOutIcons}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
