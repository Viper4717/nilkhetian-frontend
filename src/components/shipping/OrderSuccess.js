import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OrderSuccess() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="verifyText">
                Order successfully placed!
            </h4>
            <div className="verifyPageBtnDiv">
                <Button className="verifyPageBtn" as={Link} to='/' variant="custom">
                    Back to Home
                </Button>
            </div>
        </Container>
    );
}

export default OrderSuccess;
