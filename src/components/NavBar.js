import styles from "../styles/NavBar.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import { axiosReq } from "../api/axiosDefaults";
import { useEffect } from "react";
import { useState } from "react";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const [profiles, setProfiles] = useState({ results: [] });
  const [query, setQuery] = useState("");

  const handleLogout = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSetQuery = (event) => {
    console.log(setQuery);
  };

  

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/?search=${query}`);
        setProfiles(data);
      } catch (err) {
        console.log(err);
      }
      console.log(profiles);
    };

    fetchProfile();
  }, [query]);

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
    <Navbar
      expanded={expanded}
      expand="lg"
      fixed="top"
      className={styles.NavBar}
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.Logo}>TestHub</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarScroll"
        />
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
          <Form onSubmit={(event) => event.preventDefault()} className="d-flex">
            <Form.Control
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Profiles"
              className="mr-2"
              aria-label="Search"
            />
            <Button className={styles.SearchBtn}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
