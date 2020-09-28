import React, { useState, useEffect, useContext } from 'react';
import './Profile.css';
import BookOrderCard from './BookOrderCard';
import { Container, Image, Button} from 'react-bootstrap';
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

function Profile() {

    const [user, setUser] = useContext(UserContext);

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
            <div className="profileBgDiv">
                <div className="profileLeftDiv">
                    <h5 className="personalInfoText">
                        Personal Info
                    </h5>
                    <div className="personalInfoDiv">
                        <text> {user.name} </text>
                        <text> {user.email} </text>
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
                    <Button className="logInOutBtn" variant="custom" onClick={() => logoutUser(user, setUser)}>
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