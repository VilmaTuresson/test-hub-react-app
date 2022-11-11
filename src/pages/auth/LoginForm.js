import React from 'react'
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import appStyles from '../../App.module.css';

const LoginForm = () => {
    return ( 
        <Row>
            <Col>
                <Container className={appStyles.Content}>
                    <h1>Log in</h1>

                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Username'
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

                        <Button type="submit">
                            Log in
                        </Button>
                    </Form>
                </Container>
                <Container className={appStyles.Content}>
                    <Link to='/'>
                        Don't have an account yet? <span>Register here!</span>
                    </Link>
                </Container>
            </Col>
        </Row>
    )
}

export default LoginForm;