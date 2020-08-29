import React from 'react';
import './Login.css'
import { Form, Container } from 'react-bootstrap';

function Login() {
  return (
    <Container fluid="md" className="parentContainer">
        <h4>
            Sign in
        </h4>
        <div className="formDiv">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="loginForm" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
            </Form>
            <text> Don't have an account? </text>
            <a className="createAccount" href="#"> Create an account. </a>
        </div>
    </Container>
  );
}

export default Login;
