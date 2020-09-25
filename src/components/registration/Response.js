import React, { useContext } from 'react';
import './Response.css';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ResponseContext } from '../../Contexts';

function VerifyMail() {

    const [response, setResponse] = useContext(ResponseContext);

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

export default VerifyMail;
