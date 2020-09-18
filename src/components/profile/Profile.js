import React, { useState } from 'react';
import './Profile.css';
import BookOrderCard from './BookOrderCard';
import { Container, Image, Button} from 'react-bootstrap';
import ProfileImage from '../../assets/profile/profileImage.png';
import { Link } from 'react-router-dom';

function Profile() {

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

    return(
        <Container fluid="md" className="parentContainer smallHeight">
            <h2 className="storeHeader"> Profile </h2>
            <div className="profileBgDiv">
                <div className="profileLeftDiv">
                    <h5 className="personalInfoText">
                        Personal Info
                    </h5>
                    <div className="personalInfoDiv">
                        <text> John Doe </text>
                        <text> johndoe@gmail.com </text>
                        <text> 01712345678 </text>
                    </div>
                    <h5 className="personalInfoText">
                        Address Info
                    </h5>
                    <div className="personalInfoDiv">
                        <text> 123, main street </text>
                        <text> New York </text>
                    </div>
                </div>
                <div className="profileRightDiv">
                    <Image src={ProfileImage} roundedCircle />
                    <Link className="createAccount" href="#"> Edit Profile </Link>
                    <Button className="logInOutBtn" variant="custom"> Log Out </Button>
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