import React from "react";
import styles from "../styles/PostNav.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const PostNav = () => {
  return (
    <div className={styles.BtnGroup}>
      <NavLink to="/feed" className={styles.NavLink}>
        <Button className={styles.Btn}>Following</Button>
      </NavLink>

      <NavLink to="/liked" className={styles.NavLink}>
        <Button className={styles.Btn}>Liked posts</Button>
      </NavLink>

      <NavLink to="/posts" className={styles.NavLink}>
        <Button className={styles.Btn}>My Post</Button>
      </NavLink>

      <NavLink to="/posts/create" className={styles.NavLink}>
        <Button className={styles.Btn}>Create Post</Button>
      </NavLink>
    </div>
  );
};

export default PostNav;
