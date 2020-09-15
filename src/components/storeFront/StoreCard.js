import React, { useEffect } from 'react';
import './StoreCard.css';
import { Button, Card } from 'react-bootstrap';
import { categoryParse } from '../../util';

function StoreCard({storeId, storeName, storeImgPath, storeDetails, storeCategories}) {

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
                    <Button className="visitStoreButton" variant="custom"
                    href = {(Array.isArray(storeCategories) && storeCategories.length) ? 
                        `/store?id=${storeId}&category=${categoryParse(storeCategories[0])}&page=1`
                        : `/store?id=${storeId}`}>
                        Visit This Store 
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export default StoreCard;