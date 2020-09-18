import React from 'react';
import './Login.css'
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container fluid="md" className="parentContainer smallHeight">
        <h4 className="signInText">
            Sign In
        </h4>
        <div className="formDiv">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
            </Form>
            <text className="accountText"> Don't have an account? </text>
            <Link className="createAccount" to="/registration"> Create an account. </Link>
            <div className="signInButtonnOverlay">
                <Button className="signInButtonnWeb" variant="custom">
                    Sign In
                </Button>
            </div>
            <div className="signInMobileOverlay">
                <Button className="signInButtonnMobile" variant="custom">
                    Sign In
                </Button>
            </div>
        </div>
    </Container>
  );
}

export default Login;
