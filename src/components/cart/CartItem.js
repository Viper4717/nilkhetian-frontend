import React, { useState, useContext } from 'react';
import './CartItem.css';
import { Card, Button } from 'react-bootstrap';
import { CgTrash } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts';

function CartItem({bookId, bookName, bookAuthor, bookStoreName, bookImgPath, bookQuantity, bookPrice}) {

    const [cart, setCart] = useContext(CartContext);
    const [quantity, setQuantity] = useState(bookQuantity);

    const removeFromCart = () => {
        const newCart = cart.filter(item => item.id !== bookId);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }
    const increaseQty = () =>{
        if(quantity < 99){
            const newQuantity = quantity + 1;
            modifyQuantity(newQuantity);
        }
    }
    const decreaseQty = () =>{
        if(quantity > 1){
            const newQuantity = quantity - 1;
            modifyQuantity(newQuantity);
        }
    }
    const modifyQuantity = (newQuantity) => {
        const index = cart.findIndex(item => item.id === bookId);
        const newCart = [...cart];
        newCart[index] = {...newCart[index], quantity: newQuantity};
        setCart(newCart);
        setQuantity(newQuantity);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    return (
        <Card className="cartItem">
            <div className="cartItemdDiv">
                <div className="cartItemCoverBg">
                    <Card.Img className="cartItemCover" src={bookImgPath} alt="Book Image"/>
                </div>
                <div className="cartBodyBg">
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
                    <div className="cartItemDeleteBg">
                        <Link onClick={removeFromCart}>
                            <CgTrash className="trashIcon" size='1.5em'/>
                        </Link>
                    </div>
                </div>
                <div className="cartItemQtyBg">
                    <Button className="qtyBtn" variant="light" onClick={decreaseQty}>-</Button>
                    <div className="cartItemQtyDiv"> {quantity} </div>
                    <Button className="qtyBtn" variant="light" onClick={increaseQty}>+</Button>
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
