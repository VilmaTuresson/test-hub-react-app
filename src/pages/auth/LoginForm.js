import React, { useState } from 'react'
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios"; 

import styles from '../../styles/SignUpInForm.module.css';
import appStyles from '../../App.module.css';
import buttonStyles from '../../styles/Button.module.css';

const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const { username, password } = loginData;

    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('/dj-rest-auth/login/', loginData);
            history.push('/');
        } catch (err) {
            setErrors(err.response?.data);
        }
    }

    return ( 
        <Row>
            <Col>
                <Container className={`${appStyles.Content} ${styles.Container}`}>
                    <h1 className={styles.Header}>Login to your account!</h1>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text"
                                placeholder='Username'
                                name='username'
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Button className={`${buttonStyles.FormButton}`} type="submit">
                            Login
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert variant="warning" key={idx} className='mt-3' active>
                                {message}
                            </Alert>
                        ))}
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