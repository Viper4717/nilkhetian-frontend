import React from 'react';
import './Registration.css'
import { Form, Button, Container } from 'react-bootstrap';

function Registration() {
  return (
    <Container fluid="md" className="parentContainer smallHeight">
        <h4 className="signInText">
            Create Account
        </h4>
        <div className="formDiv">
          <div>
            <h5 className="personalInfoText">
                Personal Info
            </h5>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-enter password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter number" />
                </Form.Group>
            </Form>
          </div>
          <div>
            <div className="addressTextDiv">
              <h5 className="personalInfoText">
                  Address Info
              </h5>
              <text className="accountText"> This will be set as your default shipping address </text>
            </div>
            <Form>
                <Form.Group>
                    <Form.Label>Address Line 1</Form.Label>
                    <Form.Control placeholder="Enter address" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address Line 2</Form.Label>
                    <Form.Control placeholder="Enter address" />
                </Form.Group>
            </Form>
          </div>
          <div className="signInButtonnOverlay">
              <Button className="signInButtonnWeb" variant="custom">
                  Sign Up
              </Button>
          </div>
          <div className="signInMobileOverlay">
              <Button className="signInButtonnMobile" variant="custom">
                  Sign Up
              </Button>
          </div>
        </div>
    </Container>
  );
}

export default Registration;