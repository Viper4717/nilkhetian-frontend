import React from 'react';
import './StoreFront.css';
import BookStoreImage from '../../assets/bookStore/bookStore.jpg'
import { Container, Button, Row, Card } from 'react-bootstrap';

function StoreFront() {
    const testArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <Container fluid="md" className="parentContainer smallHeight padBottomContainer">
            <h2 className="storeHeader"> Nilkhet Online: Store Front </h2>
            <div className="topButtonDiv">
                <Button className="bookCategoryButton" variant="custom">
                    Search by Book Categories
                </Button>
            </div>
            <div className="storeGrid">
                {testArray.map(index => (
                    <Card className="storeCard">
                        <div className="storeCardDiv">
                            <Card.Title className="storeTitle">
                                Book Store Name
                            </Card.Title>
                            <div className="storeCoverBg">
                                <Card.Img className="storeCover" src={BookStoreImage} alt="Book Image"/>
                            </div>
                            <div className="storeDetailsBg">
                                <Card.Text className="storeDetails">
                                    This is where my friend, the details, the unique details
                                    of the store, will be shown, proudly, gloriously.
                                </Card.Text>
                            </div>
                            <Button className="visitStoreButton" variant="custom"> Visit This Store </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </Container>
    );
}

export default StoreFront;
