import React from 'react'
import { Navbar, Container, Nav, NavDropdown, FormControl, Form, Button} from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#">TestHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '500px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Account</Nav.Link>
            <NavDropdown title="Posts" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Posts</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Liked Posts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Create new Post</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
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