import React, { useContext } from 'react';
import './StoreBookCard.css';
import { Button, Card } from 'react-bootstrap';
import { CartContext } from '../../Contexts';

function StoreBookCard({bookId, bookImgPath, bookName, bookAuthor, bookStoreName, bookPrice}) {

    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const newCartItem = {
            id: bookId,
            name: bookName,
            author: bookAuthor,
            storeName: bookStoreName,
            imgPath: bookImgPath,
            price: bookPrice,
            quantity: 1,
        };
        const newCart = [...cart, newCartItem];
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    const removeFromCart = () => {
        const newCart = cart.filter(item => item.id !== bookId);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    return (
        <Card className="storeBookCard">
            <div className="storeBookCardDiv">
                <div className="storeBookCoverBg">
                    <Card.Img className="storeBookCover" src={bookImgPath} alt="Book Image"/>
                </div>
                <div className="storeBookDetailsBg">
                    <Card.Title className="storeBookTitle">
                        {bookName}
                    </Card.Title>
                    <Card.Text className="storeBookAuthor">
                        {bookAuthor}
                    </Card.Text>
                    <Card.Text className="storeBookPrice">
                        {bookPrice} ৳
                    </Card.Text>
                </div>
                {cart.some(item => item.id == bookId) ?
                    <Button className="addToCartButton" variant="remove"
                    onClick={removeFromCart}>
                        Remove from Cart
                    </Button>
                    :
                    <Button className="addToCartButton" variant="custom"
                    onClick={addToCart}>
                        Add to Cart
                    </Button>
                }
            </div>
        </Card>
    );
}

export default StoreBookCard;