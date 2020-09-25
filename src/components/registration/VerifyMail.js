import React from 'react';
import './VerifyMail.css';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function VerifyMail() {
    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="verifyText">
                An e-mail has been sent to your e-mail address for verification.
            </h4>
            <h4 className="verifyText">
                Please verify your e-mail to complete registration.
            </h4>
            <div className="verifyPageBtnDiv">
                <Button className="verifyPageBtn" as={Link} to='/' variant="custom">
                    Back to Home
                </Button>
            </div>
        </Container>
    );
}

export default VerifyMail;
