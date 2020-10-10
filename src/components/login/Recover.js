import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import Axios from 'axios';
import { serverUrl } from '../../util';

function recoverMail(emailObject, setMessage, setLoading){
    Axios.post(`${serverUrl}/api/user/resetpassword`, emailObject)
    .then(({data: res}) => {
        window.scrollTo(0, 0);
        const msg = "An e-mail has been sent to your e-mail address for password recovery."
        setMessage(msg);
        setLoading(false);
    })
    .catch((error) => {
        if(error.response != null && error.response.status == 429){
            console.log("Failed to resend");
            window.scrollTo(0, 0);
            const msg = "Please wait for some time before requesting again."
            setMessage(msg);
            setLoading(false);
        }
        else{
            window.scrollTo(0, 0);
            const msg = "Failed to resend code."
            setMessage(msg);
            setLoading(false);
        }
    });
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email);
}

function Recover() {

    const [error, setError] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function sendMail(e){
        e.preventDefault();
        setMessage(null);
        if(email){
            setError(null);
            if(!validateEmail(email)){
                window.scrollTo(0, 0);
                const err = "Invalid data."
                setError(err);
            }
            else{
                setError(null);
                setLoading(true);
                const emailObject = {
                    email: email
                }
                recoverMail(emailObject, setMessage, setLoading);
            }
        }
        else{
            window.scrollTo(0, 0);
            const err = "Please enter an e-mail."
            setError(err);
        }
    }

    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="signInText">
                Password Recovery
            </h4>
            <div className="formDiv">
            <Form onSubmit={sendMail}>
                <div>
                    {message &&
                    <Alert variant='warning'>
                        {message}
                    </Alert>}
                    {error &&
                    <Alert variant='danger'>
                        {error}
                    </Alert>}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter your e-mail</Form.Label>
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

export default Recover;