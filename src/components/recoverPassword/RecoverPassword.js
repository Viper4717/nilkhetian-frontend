import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import Axios from 'axios';
import { serverUrl } from '../../util';

function changeUserPass(passwordObject, token, setLoading, setError){
    Axios.post(`${serverUrl}/api/user/resetpassword/${token}`, passwordObject)
    .then(({data: res}) => {
        window.location.assign('/recoverpasswordsuccess');
    })
    .catch((error) => {
        window.scrollTo(0, 0);
        const err = "Failed to change password."
        setError(err);
        setLoading(false);
    });
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email);
}

function RecoverPassword() {

    const [token, setToken] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
        const newToken = window.location.href.substring(
            window.location.href.indexOf("/recoverpassword")+17, window.location.href.length);
        if(newToken == ""){
            const err = "Invalid token.";
            setError(err);
        }
        else{
            setToken(newToken);
        }
    }, [])

    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleConfirmPassword(e){
        setConfirmPass(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }

    function changePass(e){
        e.preventDefault();
        if(password && confirmPass && email){
            setError(null);
            if(password.length < 8 || password !== confirmPass || !validateEmail(email)){
                window.scrollTo(0, 0);
                const err = "Invalid data."
                setError(err);
            }
            else{
                setError(null);
                setLoading(true);
                const passwordObject = {
                    newPassword: password,
                    email: email,
                }
                changeUserPass(passwordObject, token, setLoading, setError);
            }
        }
        else{
            window.scrollTo(0, 0);
            const err = "Please fill out all the fields."
            setError(err);
        }
    }

    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="signInText">
                Change your password
            </h4>
            <div className="formDiv">
            <Form onSubmit={changePass}>
                <div>
                    {error &&
                    <Alert variant='danger'>
                        {error}
                    </Alert>}
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter New Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" onChange={handlePassword}/>
                        {(password && password.length < 8) &&
                        <Form.Text className="passwordWarnText">
                            Password must be minimum 8 characters long.
                        </Form.Text>}
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter password"
                        onChange={handleConfirmPassword}/>
                        {(confirmPass && password !== confirmPass) &&
                        <Form.Text className="passwordWarnText"> Passwords don't match! </Form.Text>}
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Confirm you e-mail address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
                        {(email && !validateEmail(email)) &&
                        <Form.Text className="passwordWarnText">
                            Enter a valid e-mail address.
                        </Form.Text>}
                    </Form.Group>
                </div>
                <div className="signInButtonOverlay">
                    <Button className="signInButtonWeb" variant="custom" type="submit" disabled={loading}>
                        {loading? <Spinner animation="border" variant="dark"/> : "Confirm"}
                    </Button>
                </div>
                <div className="signInMobileOverlay">
                    <Button className="signInButtonMobile" variant="custom" type="submit" disabled={loading}>
                        {loading? <Spinner animation="border" variant="dark"/> : "Confirm"}
                    </Button>
                </div>
            </Form>
            </div>
        </Container>
    );
}

export default RecoverPassword;