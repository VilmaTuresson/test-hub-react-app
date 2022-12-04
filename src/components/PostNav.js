import React from "react";
import styles from "../styles/PostNav.module.css";
import { NavLink } from "react-router-dom";
import { ButtonGroup, Button } from "react-bootstrap";

const PostNav = () => {
  return (
    <div className={styles.BtnGroup}>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.ActiveLink}
        to="/"
      >
        <Button className={styles.Btn}>Liked posts</Button>
      </NavLink>

      <NavLink to="/" className={styles.NavLink}>
        <Button className={styles.Btn}>My Post</Button>
      </NavLink>

      <NavLink to="/posts/create" className={styles.NavLink}>
        <Button className={styles.Btn}>Create Post</Button>
      </NavLink>
    </div>
  );
};

export default PostNav;
