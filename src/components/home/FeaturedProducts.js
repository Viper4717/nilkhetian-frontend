import React, { useContext } from 'react';
import './FeaturedProducts.css';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { RiArrowRightCircleFill } from 'react-icons/ri';
import { CartContext } from '../../CartContext';

function FeaturedProducts({cardDeckTitle, topCategory}) {

    const [cart, setCart] = useContext(CartContext);

    const addToCart = (book) => {
        const newCartItem = {
            id: book.id,
            name: book.name,
            author: book.author,
            storeName: book.storeName,
            imgPath: book.imgPath,
            price: book.price,
            quantity: 1,
        }
        const newCart = [...cart, newCartItem];
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    const removeFromCart = (book) => {
        const newCart = cart.filter(item => item.id !== book.id);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    return (
        <div className="cardDeck">
            <div className="cardDeckHeader">
                <h4 className="cardDeckTitle"> {cardDeckTitle} </h4>
                <div>
                    <text className="moreButtonText">More</text>
                    <a className="moreButton" href='#'>
                        <RiArrowRightCircleFill size='2em'/>
                    </a>
                </div>
            </div>
            <CardGroup className="bookCardGroup">
                {topCategory.map((book) => (
                    <Card className="bookCard">
                        <div className="bookCardDiv">
                            <div className="bookCoverBg">
                                <Card.Img className="bookCover" src={book.imgPath} alt="Book Image"/>
                            </div>
                            <div className="bookDetailsBg">
                                <Card.Title className="bookTitle">
                                    {book.name}
                                </Card.Title>
                                <Card.Text className="author">
                                    {book.author}
                                </Card.Text>
                                <Card.Title className="bookStoreTitle">
                                    {book.storeName}
                                </Card.Title>
                                <Card.Text className="bookPrice">
                                    {book.price} ৳
                                </Card.Text>
                            </div>
                            {cart.some(item => item.id == book.id) ?
                                <Button className="removeFromCartButton" variant="remove"
                                onClick={() => removeFromCart(book)}>
                                    Remove from Cart
                                </Button>
                                :
                                <Button className="addToCartButton" variant="custom"
                                onClick={() => addToCart(book)}>
                                    Add to Cart
                                </Button>
                            }
                        </div>
                    </Card>
                ))}
            </CardGroup>
        </div>
    );
  }
  
export default FeaturedProducts;