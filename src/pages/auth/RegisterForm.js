import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    return (
        <Row>
            <Col>
                <Container>
                    <h2>Register an account!</h2>
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name='username'
                            />
                        </Form.Group>

                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control 
                                type="password"
                                placeholder="Password"
                                name="password1"
                            />
                        </Form.Group>

                        <Form.Group controlId="password2">
                            <Form.Label className="d-none"> Confirm password</Form.Label>
                            <Form.Control 
                                type="password"
                                placeholder="Confirm password"
                                name="password2"
                            />
                        </Form.Group>

                        <Button type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Container>
                <Container>
                    <Link to='/login'>
                        Already have an account? <span>Sign in here!</span>
                    </Link>
                </Container>
            </Col>
        </Row>
    )
}

export default RegisterForm;