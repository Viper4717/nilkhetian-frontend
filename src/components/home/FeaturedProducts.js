import React from 'react';
import './FeaturedProducts.css';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { RiArrowRightCircleFill } from 'react-icons/ri';

function FeaturedProducts({cardDeckTitle, topCategory}) {
    return (
        <div className="cardDeck">
            <div className="cardDeckHeader">
                <h4 className="cardDeckTitle"> {cardDeckTitle} </h4>
                <div>
                    <text className="moreButtonText">More</text>
                    <a className="moreButton" href='#'>
                        <RiArrowRightCircleFill size='2em'/>
                    </a>
                </div>
            </div>
            <CardGroup className="bookCardGroup">
                {topCategory.map((book) => (
                    <Card className="bookCard">
                        <div className="bookCardDiv">
                            <div className="bookCoverBg">
                                <Card.Img className="bookCover" src={book.imgPath} alt="Book Image"/>
                            </div>
                            <div className="bookDetailsBg">
                                <Card.Title className="bookTitle">
                                    {book.bookName}
                                </Card.Title>
                                <Card.Text className="author">
                                    {book.author}
                                </Card.Text>
                                <Card.Title className="bookStoreTitle">
                                    {book.bookStoreName}
                                </Card.Title>
                                <Card.Text className="bookPrice">
                                    {book.price} ৳
                                </Card.Text>
                            </div>
                            <Button className="addToCartButton" variant="custom"> Add to Cart </Button>
                        </div>
                    </Card>
                ))}
            </CardGroup>
        </div>
    );
  }
  
export default FeaturedProducts;