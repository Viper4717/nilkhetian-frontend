import React, { useState, useEffect, useContext } from 'react';
import './Confirmation.css';
import cashOnDeliveryImage from '../../assets/confirmation/cashOnDelivery.png'
import { Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext,ShippingContext, UserContext } from '../../Contexts';

function Confirmation() {

    const [user, setUser] = useContext(UserContext);
    const [cart, setCart] = useContext(CartContext);
    const [shippingInfo, setShippingInfo] = useContext(ShippingContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="signInText">
                Finalizing your order
            </h4>
            <div className="paymentInfoDiv">
                <div className="paymentInfoWhiteDiv">
                    <h5 className="paymentInfoText">
                        Payment Info
                    </h5>
                    <div className="paymentImageDiv">
                        <Image className="cashOnDeliveryImage" src={cashOnDeliveryImage} />
                    </div>
                    <h5 className="cashOnDeliveryText">
                        Cash on Delivery
                    </h5>
                </div>
                <div className="bottomButtonDiv">
                    <Button className="backToShippingBtn" variant="remove" as={Link} to="/shipping">
                        Back to Shipping
                    </Button>
                    <Button className="confirmPurchaseBtn" variant="remove">
                        Confirm Purchase
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default Confirmation;
