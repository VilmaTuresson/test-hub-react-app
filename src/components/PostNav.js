import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import styles from "../styles/PostNav.module.css";

const PostNav = () => {
  return (
    <ButtonGroup className={styles.BtnGroup}>
      <Button className={styles.Btn}>My posts</Button>
      <Button className={styles.Btn}>Liked Posts</Button>
      <Button className={styles.Btn}>Create post</Button>
    </ButtonGroup>
  );
};

export default PostNav;
