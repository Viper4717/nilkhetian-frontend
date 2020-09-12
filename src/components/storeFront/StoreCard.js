import React from 'react';
import './StoreCard.css';
import { Button, Card } from 'react-bootstrap';

const parsedCategories = [];

function categoryParse(storeCategories){
    if(Array.isArray(storeCategories) && storeCategories.length){
        var words = storeCategories[0].split(" ");
        var catName = "";
        var lower;
        for(var i = 0; i < words.length; i++){
            lower = words[i].toLowerCase();
            if(i > 0){
                catName += ('-' + lower);
            }
            else{
                catName += lower;
            }
        }
        parsedCategories.push(catName);
    }
}

function StoreCard({storeId, storeName, storeImgPath, storeDetails, storeCategories}) {

    console.log("react start")

    categoryParse(storeCategories);

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
                    href = {(Array.isArray(parsedCategories) && parsedCategories.length) ? 
                        `/store?id=${storeId}&category=${parsedCategories[0]}`
                        : `/store?id=${storeId}`}>
                        Visit This Store 
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export default StoreCard;