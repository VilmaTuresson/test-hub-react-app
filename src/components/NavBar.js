import React from "react";
import styles from "../styles/NavBar.module.css";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleLogout = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const LoggedInLinks = (
    <>
      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        className={styles.NavItem}
      >
        Profile
      </NavLink>

      <NavLink to="/" className={styles.NavItem} onClick={handleLogout}>
        Logout
      </NavLink>
    </>
  );

  const loggedOutLinks = (
    <>
      <NavLink to="/login" className={styles.NavItem}>
        Login
      </NavLink>
      <NavLink to="/register" className={styles.NavItem}>
        Register
      </NavLink>
    </>
  );

  return (
    <Navbar expand="lg" fixed="top" className={styles.NavBar}>
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.Logo}>TestHub</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            <NavLink to="/" className={styles.NavItem}>
              Home
            </NavLink>
            {currentUser ? LoggedInLinks : loggedOutLinks}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search Profiles"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
