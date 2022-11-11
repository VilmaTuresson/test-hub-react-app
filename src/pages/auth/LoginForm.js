import React from 'react'
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import styles from '../../styles/SignUpInForm.module.css';
import appStyles from '../../App.module.css';
import buttonStyles from '../../styles/Button.module.css';

const LoginForm = () => {
    return ( 
        <Row>
            <Col>
                <Container className={`${appStyles.Content} ${styles.Container}`}>
                    <h1 className={styles.Header}>Log in</h1>

                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text"
                                placeholder='Username'
                                name='username'
                            />
                        </Form.Group>

                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Password"
                                name="password1"
                            />
                        </Form.Group>

                        <Button className={`${buttonStyles.FormButton}`} type="submit">
                            Log in
                        </Button>
                    </Form>
                </Container>
                <Container className={`${appStyles.Content} ${styles.Container} ${styles.LinkContainer}`}>
                    <Link className={styles.Link} to='/register'>
                        Don't have an account yet? <span>Register here!</span>
                    </Link>
                </Container>
            </Col>
        </Row>
    )
}

export default LoginForm;