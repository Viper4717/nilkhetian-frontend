import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartContext } from '../../CartContext';

function ResultBookCard({bookId, bookImgPath, bookName, bookAuthor, bookStoreName, bookPrice}) {

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

    return (
        <Card className="bookCard">
            <div className="bookCardDiv">
                <div className="bookCoverBg">
                    <Card.Img className="bookCover" src={bookImgPath} alt="Book Image"/>
                </div>
                <div className="bookDetailsBg">
                    <Card.Title className="bookTitle">
                        {bookName}
                    </Card.Title>
                    <Card.Text className="author">
                        {bookAuthor}
                    </Card.Text>
                    <Card.Title className="bookStoreTitle">
                        {bookStoreName}
                    </Card.Title>
                    <Card.Text className="bookPrice">
                        {bookPrice} ৳
                    </Card.Text>
                </div>
                <Button className="addToCartButton" variant="custom"
                onClick={addToCart}>
                    Add to Cart
                </Button>
            </div>
        </Card>
    );
  }
  
export default ResultBookCard;