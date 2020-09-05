import React from 'react';
import './StoreCard.css';
import { Button, Card } from 'react-bootstrap';

function StoreCard({storeName, storeImgPath, storeDetails}) {
    return (
        <Card className="storeCard">
            <div className="storeCardDiv">
                <div className="storeCoverBg">
                    <Card.Img className="storeCover" src={storeImgPath} alt="Book Image"/>
                </div>
                <div className="storeDetailsBg">
                    <Card.Title className="storeTitle">
                        {storeName}
                    </Card.Title>
                    <Card.Text className="storeDetails">
                        {storeDetails}
                    </Card.Text>
                    <Button className="visitStoreButton" variant="custom"> Visit This Store </Button>
                </div>
            </div>
        </Card>
    );
}

export default StoreCard;