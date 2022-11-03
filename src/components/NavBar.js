import React from 'react'
import styles from '../styles/NavBar.module.css'
import { Navbar, Container, Nav, NavDropdown, FormControl, Form, Button} from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className={styles.Logo}>TestHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '500px' }}
            navbarScroll
          >
            <Nav.Link className={styles.NavItem}>Home</Nav.Link>
            <Nav.Link className={styles.NavItem}>Account</Nav.Link>
            <NavDropdown className={styles.NavItem} title="Posts" id="navbarScrollingDropdown">
              <NavDropdown.Item>My Posts</NavDropdown.Item>
              <NavDropdown.Item>Liked Posts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Create new Post</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={styles.NavItem}>
              Logout
            </Nav.Link>
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
  )
}

export default NavBar