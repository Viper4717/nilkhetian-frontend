import React from 'react';
import './BookCard.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BookCard({bookId, bookImgPath, bookName, bookAuthor}) {
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
                    <Button className="visitStoreButton" variant="custom" as={Link}
                    to={`/results?productId=${bookId}&page=1`}>
                        Check Availability
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export default BookCard;