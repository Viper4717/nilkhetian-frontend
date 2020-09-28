import React, { useState, useEffect, useContext } from 'react';
import './Profile.css';
import BookOrderCard from './BookOrderCard';
import { Container, Image, Button, Alert} from 'react-bootstrap';
import ProfileImage from '../../assets/profile/profileImage.png';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { serverUrl } from '../../util';
import { UserContext } from '../../Contexts';
import history from '../../History';

function logoutUser(user, setUser){
    Axios.post(`${serverUrl}/api/user/logout`, user.refreshToken)
        .then(({data: res}) => {
            const nullUser = null;
            setUser(nullUser);
            localStorage.setItem("user", JSON.stringify(nullUser));
            history.push('/');
        })
        .catch((error) => {
            console.log("Logout Failed")
        });
}

function resendCode(user, setUser, setMessage){
    const tokenObject = {
        token: user.accessToken
    }
    Axios.post(`${serverUrl}/api/user/resendconfirmation`, tokenObject)
    .then(({data: res}) => {
        const msg = "An e-mail has been sent to your e-mail address for verification."
        setMessage(msg);
    })
    .catch((error) => {
        if(error.response.status == 401){
            requestAccess(user, setUser, setMessage);
        }
        else if(error.response.status == 429){
            console.log("Failed to resend");
            const msg = "Please wait for some time before requesting again."
            setMessage(msg);
        }
    });
}

function requestAccess(user, setUser, setMessage){
    const tokenObject = {
        token: user.refreshToken
    }
    Axios.post(`${serverUrl}/api/token`, tokenObject)
    .then(({data: res}) => {
        const newUser = user;
        newUser.accessToken = res.accessToken;
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
        resendCode(newUser, setUser, setMessage);
    })
    .catch((error) => {
        const nullUser = null;
        setUser(nullUser);
        localStorage.setItem("user", JSON.stringify(nullUser));
        history.push('/');
    });
}

function Profile() {

    const [user, setUser] = useContext(UserContext);
    const [message, setMessage] = useState();

    const [orderHistory, setOrderHistory] = useState([
        {
            orderNo: "20200817xxxx",
            issueDate: "2020, Aug 17, 10:49AM",
            price: "721",
        },
        {
            orderNo: "20200817xxxx",
            issueDate: "2020, Aug 17, 10:49AM",
            price: "721",
        },
    ])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <Container fluid="md" className="parentContainer smallHeight">
            <h2 className="storeHeader"> Profile </h2>
            {message &&
            <div className="resendAlertDiv">
                <Alert variant='warning'>
                    {message}
                </Alert>
            </div>}
            <div className="profileBgDiv">
                <div className="profileLeftDiv">
                    <h5 className="personalInfoText">
                        Personal Info
                    </h5>
                    <div className="personalInfoDiv">
                        <text> {user.name} </text>
                        <text> {user.email} </text>
                        {!user.confirmed &&
                        <Link className="verifyEmailText" onClick={() => resendCode(user, setUser, setMessage)}>
                             Resend verification code.
                        </Link>}
                        <text> {user.phone} </text>
                    </div>
                    <h5 className="personalInfoText">
                        Address Info
                    </h5>
                    <div className="personalInfoDiv">
                        <text> {user.address} </text>
                    </div>
                </div>
                <div className="profileRightDiv">
                    <Image src={ProfileImage} roundedCircle />
                    <Link className="createAccount" to="#"> Edit Profile </Link>
                    <Button className="logutBtn" variant="custom" onClick={() => logoutUser(user, setUser)}>
                         Log Out 
                    </Button>
                </div>
            </div>
            <div className="bookOrderDiv">
                <h5 className="bookOrderHeader"> Book Order History </h5>
                <div className="bookOrderGrid">
                    {orderHistory.map(order => (
                        <BookOrderCard orderNo={order.orderNo} issueDate={order.issueDate}
                        price={order.price}/>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Profile;