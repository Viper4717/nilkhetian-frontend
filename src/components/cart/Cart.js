import React, { useContext } from 'react';
import './Cart.css';
import { Container } from 'react-bootstrap';
import CartItem from './CartItem';
import { CartContext } from '../../CartContext';

function Cart() {

    const [cart, setCart] = useContext(CartContext);

    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="signInText">
                My Cart
            </h4>
            <div className="cartDiv">
                {cart.map(book => (
                    <CartItem bookId={book.id} bookName={book.name} bookAuthor={book.author} bookStoreName={book.storeName}
                    bookImgPath={book.imgPath} bookQuantity={book.quantity} bookPrice={book.price} />
                ))}
            </div>
        </Container>
    );
}

export default Cart;
