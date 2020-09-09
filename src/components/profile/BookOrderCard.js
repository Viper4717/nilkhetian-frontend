import React from 'react';
import './BookOrderCard.css';
import { Card } from 'react-bootstrap';

function BookOrderCard({orderNo, issueDate, price}){
    return(
        <Card className="bookOrderCard">
            <div>
                <h6> Order No </h6>
                <text> {orderNo} </text>
            </div>
            <div>
                <h6> Issue Date </h6>
                <text> {issueDate} </text>
            </div>
            <div>
                <h6> Price </h6>
                <text> {price} ৳ </text>
            </div>
        </Card>
    );
}

export default BookOrderCard;