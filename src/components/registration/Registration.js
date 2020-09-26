import React, { useState } from 'react';
import './Registration.css'
import { Form, Button, Container, Alert } from 'react-bootstrap';
import Axios from 'axios';
import { serverUrl } from '../../util';

function postUser(userObject){
    Axios.post(`${serverUrl}/api/user/register`, userObject)
        .then((res) => {
            window.location.assign('/response/200');
        })
        .catch((error) => {
            window.location.assign('/response/409');
            console.log('failed to register');
        });
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email);
}

function validatePhone(phone){
    const re = /^(\+88)?(01[3-9]{1}\d{8}$)/
    return re.test(phone);
}

function Registration() {

    const [formEmpty, setFormEmpty] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();

    function handleName(e){
        setName(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleConfirmPassword(e){
        setConfirmPass(e.target.value);
    }
    function handlePhone(e){
        setPhone(e.target.value);
    }
    function handleAddress(e){
        setAddress(e.target.value);
    }

    function register(e){
        e.preventDefault();
        if(name && email && password && confirmPass && phone && address){
            setFormEmpty(false);
            if(name.length < 6 || !validateEmail(email) || password.length < 8 
            || !validatePhone(phone) || address.length < 10
            || password !== confirmPass){
                window.scrollTo(0, 0);
                setInvalid(true);
            }
            else{
                setInvalid(false);
                const userObject = {
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    address: address,
                }
                postUser(userObject);
            }
        }
        else{
            window.scrollTo(0, 0);
            setFormEmpty(true);
        }
    }

    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="signInText">
                Create Account
            </h4>
            <div className="formDiv">
            <div>
                {formEmpty &&
                <Alert variant='danger'>
                    Please fill out all the details.
                </Alert>}
                {invalid &&
                <Alert variant='danger'>
                    Invalid data.
                </Alert>}
                <h5 className="personalInfoText">
                    Personal Info
                </h5>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Enter name" onChange={handleName} />
                        {(name && name.length < 6) &&
                        <Form.Text className="passwordWarnText">
                            Name must be minimum 6 characters long.
                        </Form.Text>}
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
                        {(email && !validateEmail(email)) &&
                        <Form.Text className="passwordWarnText">
                            Enter a valid e-mail address.
                        </Form.Text>}
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" onChange={handlePassword}/>
                        {(password && password.length < 8) &&
                        <Form.Text className="passwordWarnText">
                            Password must be minimum 8 characters long.
                        </Form.Text>}
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter password"
                        onChange={handleConfirmPassword}/>
                        {(confirmPass && password !== confirmPass) &&
                        <Form.Text className="passwordWarnText"> Passwords don't match! </Form.Text>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Enter number" onChange={handlePhone}/>
                        {(phone && !validatePhone(phone)) &&
                        <Form.Text className="passwordWarnText">
                            Enter a valid number.
                        </Form.Text>}
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
                        <Form.Control placeholder="Enter address" onChange={handleAddress} />
                        {(address && address.length < 10) &&
                        <Form.Text className="passwordWarnText">
                            Address must be minimum 10 characters long.
                        </Form.Text>}
                    </Form.Group>
                </Form>
            </div>
            <div className="signInButtonnOverlay">
                <Button className="signInButtonnWeb" variant="custom" onClick={register}>
                    Sign Up
                </Button>
            </div>
            <div className="signInMobileOverlay">
                <Button className="signInButtonnMobile" variant="custom" onClick={register}>
                    Sign Up
                </Button>
            </div>
            </div>
        </Container>
    );
}

export default Registration;