import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MailExists() {
    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="verifyText">
                The provided e-mail is already in use.
            </h4>
            <div className="verifyPageBtnDiv">
                <Button className="verifyPageBtn" as={Link} to='/registration' variant="custom">
                    Back to Registration
                </Button>
            </div>
        </Container>
    );
}

export default MailExists;