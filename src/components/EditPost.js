import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../styles/EditPost.module.css";

const Menu = React.forwardRef(({ onClick }, ref) => (
  <i
    className={`fa-solid fa-ellipsis-vertical ${styles.Menu}`}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const EditPost = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={Menu} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.PostMenu}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i class={`fa-regular fa-pen-to-square ${styles.Icons}`}></i>
        </Dropdown.Item>

        <Dropdown.Item
          className={styles.PostMenu}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i class={`fa-solid fa-trash-can ${styles.Icons}`}></i>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
