import React from 'react';
import './CartItem.css';
import { Card, Button } from 'react-bootstrap';

function CartItem({bookName, bookAuthor, bookStoreName, bookImgPath, bookQuantity, bookPrice}) {
    return (
        <Card className="cartItem">
            <div className="cartItemdDiv">
                <div className="cartItemCoverBg">
                    <Card.Img className="cartItemCover" src={bookImgPath} alt="Book Image"/>
                </div>
                <div className="cartItemDetailsBg">
                    <Card.Title className="cartItemTitle">
                        {bookName}
                    </Card.Title>
                    <Card.Text className="cartItemAuthor">
                        {bookAuthor}
                    </Card.Text>
                    <Card.Text className="cartItemStoreName">
                        {bookStoreName}
                    </Card.Text>
                </div>
                <div className="cartItemQtyBg">
                    <Button className="qtyBtn" variant="light">-</Button>
                    <div className="cartItemQtyDiv"> {bookQuantity} </div>
                    <Button className="qtyBtn" variant="light">+</Button>
                </div>
                <div className="cartItemPriceBg">
                    <Card.Text className="cartItemPrice">
                        {bookQuantity * bookPrice} ৳
                    </Card.Text>
                </div>
            </div>
        </Card>
    );
}

export default CartItem;
