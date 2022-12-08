import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/SuccessfulDelete.module.css";

const SuccessfulDelete = () => {
  return (
    <div className={styles.Container}>
      <h2>The deletion was Successful!</h2>
      <NavLink className={styles.Link} to="/">
        Go back to home page
      </NavLink>
    </div>
  );
};

export default SuccessfulDelete;
