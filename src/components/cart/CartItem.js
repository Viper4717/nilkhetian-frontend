import React, { useContext } from 'react';
import './CartItem.css';
import { Card, Button } from 'react-bootstrap';
import { CgTrash } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';

function CartItem({bookId, bookName, bookAuthor, bookStoreName, bookImgPath, bookQuantity, bookPrice}) {

    const [cart, setCart] = useContext(CartContext);

    const removeFromCart = () => {
        const newCart = cart.filter(item => item.id !== bookId);
        setCart(newCart);
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
