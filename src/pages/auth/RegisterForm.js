import React, {useState} from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"; 

import appStyles from '../../App.module.css';
import styles from '../../styles/SignUpInForm.module.css';
import buttonStyles from '../../styles/Button.module.css';


const RegisterForm = () => {

    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: '',
    })
    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({});
    
    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post('/dj-rest-auth/registration/', signUpData);
          history.push('/login');
        } catch (err) {
            setErrors(err.response?.data);
        }
    }

    return (
        <Row>
            <Col>
                <Container className={`${appStyles.Content} ${styles.Container}`}>
                    <h1 className={styles.Header}>Register an account!</h1>

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

                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control 
                                className={styles.Input}
                                type="password"
                                placeholder="Password"
                                name="password1"
                                value={password1}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password2">
                            <Form.Label className="d-none"> Confirm password</Form.Label>
                            <Form.Control 
                                className={styles.Input}
                                activeClassName={styles.Active} 
                                type="password"
                                placeholder="Confirm password"
                                name="password2"
                                value={password2}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Button className={`${buttonStyles.FormButton}`} type="submit">
                            Sign Up
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert variant="warning" key={idx} className='mt-3' active>
                                {message}
                            </Alert>
                        ))}
                    </Form>
                </Container>
                <Container className={`${appStyles.Content} ${styles.Container} ${styles.LinkContainer}`}>
                    <Link className={styles.Link} to='/login'>
                        Already have an account? <span>Sign in here!</span>
                    </Link>
                </Container>
            </Col>
        </Row>
    )
}

export default RegisterForm;