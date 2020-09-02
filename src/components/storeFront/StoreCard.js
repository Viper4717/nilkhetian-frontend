import React from 'react';
import './StoreCard.css';
import { Button, Card } from 'react-bootstrap';

function StoreFront({storeName, storeImgPath, storeDetails}) {
    return (
        <Card className="storeCard">
            <div className="storeCardDiv">
                <Card.Title className="storeTitle">
                    {storeName}
                </Card.Title>
                <div className="storeCoverBg">
                    <Card.Img className="storeCover" src={storeImgPath} alt="Book Image"/>
                </div>
                <div className="storeDetailsBg">
                    <Card.Text className="storeDetails">
                        {storeDetails}
                    </Card.Text>
                </div>
                <Button className="visitStoreButton" variant="custom"> Visit This Store </Button>
            </div>
        </Card>
    );
}

export default StoreFront;