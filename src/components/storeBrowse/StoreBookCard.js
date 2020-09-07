import React from 'react';
import './StoreBookCard.css';
import { Button, Card } from 'react-bootstrap';

function StoreBookCard({bookImgPath, bookName, bookAuthor, bookPrice}) {
    return (
        <Card className="storeBookCard">
            <div className="storeBookCardDiv">
                <div className="storeBookCoverBg">
                    <Card.Img className="storeBookCover" src={bookImgPath} alt="Book Image"/>
                </div>
                <div className="storeBookDetailsBg">
                    <Card.Title className="storeBookTitle">
                        {bookName}
                    </Card.Title>
                    <Card.Text className="storeBookAuthor">
                        {bookAuthor}
                    </Card.Text>
                    <Card.Text className="storeBookPrice">
                        {bookPrice} ৳
                    </Card.Text>
                </div>
                <Button className="addToCartButton" variant="custom"> Add to Cart </Button>
            </div>
        </Card>
    );
}

export default StoreBookCard;