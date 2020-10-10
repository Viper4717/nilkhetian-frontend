import React, { useState, useEffect } from 'react';
import './Response.css';
import { Container, Button } from 'react-bootstrap';
import Axios from 'axios';
import { serverUrl } from '../../util';
import { Link } from 'react-router-dom';

function verifyUser(token, setResponse){
    Axios.get(`${serverUrl}/user/confirmation/${token}`)
        .then((res) => {
            const reply = "Your account has been successfully verified!"
            setResponse(reply);
        })
        .catch((error) => {
            const reply = "Failed to verify user";
            setResponse(reply);
            console.log('Failed to verify user');
        });
}

function Response() {

    const [response, setResponse] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
        const code = window.location.href.substring(
            window.location.href.indexOf("/response")+10, window.location.href.length);
        if(code == "200"){
            const reply = "An e-mail has been sent to your e-mail address for verification. " +
            "Please verify your e-mail to complete registration.";
            setResponse(reply);
        }
        else if(code == ""){
            const reply = "Oh my sweet summer child, how did you end up here?";
            setResponse(reply);
        }
        else {
            verifyUser(code, setResponse);
        }
    }, [])

    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="verifyText">
                {response}
            </h4>
            <div className="verifyPageBtnDiv">
                <Button className="verifyPageBtn" as={Link} to='/' variant="custom">
                    Back to Home
                </Button>
            </div>
        </Container>
    );
}

export default Response;
