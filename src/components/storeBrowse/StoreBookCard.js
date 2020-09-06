import React from 'react';
import { Button, Card } from 'react-bootstrap';

function StoreBookCard({bookImgPath, bookName, bookAuthor, bookPrice}) {
    return (
        <Card className="bookCheckCard">
            <div className="bookCheckCardDiv">
                <div className="bookCheckCoverBg">
                    <Card.Img className="bookCheckCover" src={bookImgPath} alt="Book Image"/>
                </div>
                <div className="bookCheckDetailsBg">
                    <Card.Title className="bookCheckTitle">
                        {bookName}
                    </Card.Title>
                    <Card.Text className="bookCheckAuthor">
                        {bookAuthor}
                    </Card.Text>
                    <Card.Text className="bookPrice">
                        {bookPrice} ৳
                    </Card.Text>
                    <Button className="visitStoreButton" variant="custom"> Add to Cart </Button>
                </div>
            </div>
        </Card>
    );
}

export default StoreBookCard;