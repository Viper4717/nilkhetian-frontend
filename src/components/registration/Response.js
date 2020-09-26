import React, { useContext } from 'react';
import './Response.css';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Response() {

    const code = window.location.href.substring(
        window.location.href.indexOf("/response")+10, window.location.href.length);

    var response;

    if(code == "200"){
        response = "An e-mail has been sent to your e-mail address for verification.\n" + 
        "Please verify your e-mail to complete registration."
    }
    else if(code == "409"){
        response = "E-mail already exists";
    }

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
