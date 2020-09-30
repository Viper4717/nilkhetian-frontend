import React, { useState, useEffect, useContext } from 'react';
import './Confirmation.css';
import cashOnDeliveryImage from '../../assets/confirmation/cashOnDelivery.png'
import { Button, Container, Image, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext,ShippingContext, UserContext } from '../../Contexts';
import Axios from 'axios';
import { serverUrl } from '../../util';

// function requestAccess(user, setUser){
//     const tokenObject = {
//         token: user.refreshToken
//     }
//     Axios.post(`${serverUrl}/api/token`, tokenObject)
//     .then(({data: res}) => {
//         const newUser = user;
//         newUser.accessToken = res.accessToken;
//         localStorage.setItem("user", JSON.stringify(newUser));
//         setUser(newUser);
//         resendCode(newUser, setUser);
//     })
//     .catch((error) => {
//         const nullUser = null;
//         setUser(nullUser);
//         localStorage.setItem("user", JSON.stringify(nullUser));
//         history.push('/');
//     });
// }

function Confirmation() {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const [cart, setCart] = useContext(CartContext);
    const [shippingInfo, setShippingInfo] = useContext(ShippingContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function placeOrder(e){
        e.preventDefault();
        setLoading(true);
        const orderObject = {
            products: cart,
            phone: shippingInfo.phone,
            shippingAddress: shippingInfo.address,
            token: user.accessToken,
        }
        Axios.post(`${serverUrl}/order`, orderObject)
        .then(({data: res}) => {
            setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
        });
    }
    
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
                    <Button className="confirmPurchaseBtn" variant="remove" disabled={loading}
                    onclick={placeOrder}>
                        {loading? <Spinner animation="border" variant="dark"/> : "Confirm Purchase"}
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default Confirmation;
