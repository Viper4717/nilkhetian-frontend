import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import EmptyCartImage from '../../assets/cart/emptyCartImage.png'
import { Container, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContext, UserContext } from '../../Contexts';

function Cart() {

    const [cart, setCart] = useContext(CartContext);
    const [user, setUser] = useContext(UserContext);
    const [productCost, setCost] = useState(
        cart.reduce((acc, item) => acc + (item.quantity * item.price), 0));
    const shippingCost = 50;

    useEffect(() => {
        const newCost = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);
        setCost(newCost);
    }, [cart])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="signInText">
                My Cart
            </h4>
            {cart.length === 0 &&
                <div className="emptyDiv">
                    <Image src={EmptyCartImage}/>
                    <h4 className="emptyText">
                        It is beautiful, it is endless, it is full and yet seems empty. It hurts us.
                    </h4>
                </div>
            }
            {cart.length > 0 &&
                <div className="cartBodyDiv">
                    <div className="cartDivHeader">
                        <div className="itemDiv">Item Name</div>
                        <div className="unitDiv">Units</div>
                        <div className="priceDiv">Price</div>
                    </div>
                    <div className="cartDiv">
                        {cart.map(book => (
                            <CartItem bookId={book.id} bookName={book.name} bookAuthor={book.author}
                            bookStoreName={book.storeName} bookImgPath={book.imgPath}
                            bookQuantity={book.quantity} bookPrice={book.price} />
                        ))}
                    </div>
                    <div className="cartDivFooter">
                        <div className="emptyItemDiv"></div>
                        <div className="labelDiv">
                            Total Sum <br/>
                            Shipping
                        </div>
                        <div className="numberDiv">
                            {productCost} ৳ <br/>
                            {shippingCost} ৳
                        </div>
                    </div>
                    <div className="totalBillDiv">
                        Total Bill: {productCost + shippingCost} ৳
                    </div>
                    <div className="bottomButtonDiv">
                        <Button className="backToLibraryBtn" variant="remove" as={Link} to="/stores">
                            Back to Library
                        </Button>
                        {(user == null || !user.confirmed)?
                            <Button className="continueToShippingBtn" variant="remove" disabled>
                                Continue
                            </Button>:
                            <Button className="continueToShippingBtn" variant="remove"
                            as={Link} to="/shipping">
                                Continue
                            </Button>
                        }
                    </div>
                    {user == null &&
                    <div className="loginPromptDiv">
                        Please login to continue
                    </div>}
                    {(user != null && !user.confirmed) &&
                    <div className="loginPromptDiv">
                        Please verify account to continue
                    </div>}
                </div>
            }
        </Container>
    );
}

export default Cart;
