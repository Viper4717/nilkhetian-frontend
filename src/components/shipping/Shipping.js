import React, { useState, useEffect, useContext } from 'react';
import './Shipping.css'
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts';

function Shipping() {

    const [user, setUser] = useContext(UserContext);

    const [error, setError] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function validatePhone(phone){
        const re = /^(\+88)?(01[3-9]{1}\d{8}$)/
        return re.test(phone);
    }

    function handlePhone(e){
        setPhone(e.target.value);
    }
    function handleAddress(e){
        setAddress(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(phone && address){
            setError(null);
            if(!validatePhone(phone) || address.length < 10){
                window.scrollTo(0, 0);
                const err = "Invalid data."
                setError(err);
            }
            else{
                setError(null);
            }
        }
        else{
            window.scrollTo(0, 0);
            const err = "Please fill out all the details."
            setError(err);
        }
    }
    
    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="signInText">
                Shipping Info
            </h4>
            <div className="formDiv">
                {error &&
                <Alert variant='danger'>
                    {error}
                </Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Enter number" onChange={handlePhone}/>
                        {(phone && !validatePhone(phone)) &&
                        <Form.Text className="passwordWarnText">
                            Enter a valid number.
                        </Form.Text>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" onChange={handleAddress} />
                        {(address && address.length < 10) &&
                        <Form.Text className="passwordWarnText">
                            Address must be minimum 10 characters long.
                        </Form.Text>}
                    </Form.Group>
                    <div className="bottomButtonDiv">
                        <Button className="backToCartBtn" variant="remove" as={Link} to="/cart">
                            Back to Cart
                        </Button>
                        <Button className="continueToConfirmBtn" variant="remove" type="submit">
                            Continue
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
}

export default Shipping;
