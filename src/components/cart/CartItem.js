import React from 'react';
import './CartItem.css'
import { Card, Button } from 'react-bootstrap';

function CartItem({bookName, author, bookStoreName, imgPath, quantity, price}) {
    return (
        <Card className="cartItem">
            <div className="cartItemdDiv">
                <div className="cartItemCoverBg">
                    <Card.Img className="cartItemCover" src={imgPath} alt="Book Image"/>
                </div>
                <div className="cartItemDetailsBg">
                    <Card.Title className="cartItemTitle">
                        {bookName}
                    </Card.Title>
                    <Card.Text className="cartItemAuthor">
                        {author}
                    </Card.Text>
                    <Card.Text className="cartItemStoreName">
                        {bookStoreName}
                    </Card.Text>
                </div>
                <div className="cartItemQtyBg">
                    <Button className="qtyBtn" variant="light">-</Button>
                    <div className="cartItemQtyDiv"> {quantity} </div>
                    <Button className="qtyBtn" variant="light">+</Button>
                </div>
                <div className="cartItemPriceBg">
                    <Card.Text className="cartItemPrice">
                        {price} ৳
                    </Card.Text>
                </div>
            </div>
        </Card>
    );
}

export default CartItem;
