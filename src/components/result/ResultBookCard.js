import React from 'react';
import { Button, Card } from 'react-bootstrap';

function ResultBookCard({imgPath, bookName, author, bookStoreName, price}) {
    return (
        <Card className="bookCard">
            <div className="bookCardDiv">
                <div className="bookCoverBg">
                    <Card.Img className="bookCover" src={imgPath} alt="Book Image"/>
                </div>
                <div className="bookDetailsBg">
                    <Card.Title className="bookTitle">
                        {bookName}
                    </Card.Title>
                    <Card.Text className="author">
                        {author}
                    </Card.Text>
                    <Card.Title className="bookStoreTitle">
                        {bookStoreName}
                    </Card.Title>
                    <Card.Text className="bookPrice">
                        {price} ৳
                    </Card.Text>
                </div>
                <Button className="addToCartButton" variant="custom"> Add to Cart </Button>
            </div>
        </Card>
    );
  }
  
export default ResultBookCard;