import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import styles from "../styles/PostNav.module.css";
import { NavLink } from "react-router-dom";

const PostNav = () => {
  return (
    <ButtonGroup className={styles.BtnGroup}>
      <Button className={styles.Btn}>
        <NavLink className={styles.NavLink} to="/">
          My posts
        </NavLink>
      </Button>

      <Button className={styles.Btn}>
        <NavLink className={styles.NavLink} to="/">
          Liked Posts
        </NavLink>
      </Button>

      <Button className={styles.Btn}>
        <NavLink className={styles.NavLink} to="/posts/create">
          Create post
        </NavLink>
      </Button>
    </ButtonGroup>
  );
};

export default PostNav;
