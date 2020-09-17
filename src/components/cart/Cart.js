import React from 'react';
import './Cart.css'
import { Form, Button, Container } from 'react-bootstrap';
import CartItem from './CartItem'
import Himu from '../../assets/home/himuRimande.jpg'

function Cart() {

    const testBooks = [
        {
          bookName: "Himu Rimande",
          author: "Humayun Ahmed",
          bookStoreName: "Shameme Boi Bitan",
          imgPath: Himu,
          price: 300,
          quantity: 10,
        },
        {
          bookName: "Ami Ebong Amra",
          author: "Humayun Ahmed",
          bookStoreName: "Shameme Boi Bitan",
          imgPath: Himu,
          price: 350,
          quantity: 25,
        },
        {
          bookName: "Angels and Demons",
          author: "Dan Brown",
          bookStoreName: "Samin Er Bosta",
          imgPath: Himu,
          price: 700,
          quantity: 1,
        },
        {
          bookName: "The Da Vinci Code",
          author: "Dan Brown",
          bookStoreName: "Samin Er Bosta",
          imgPath: Himu,
          price: 800,
          quantity: 1,
        },
    ]
    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h4 className="signInText">
                My Cart
            </h4>
            <div className="cartDiv">
                {testBooks.map(book => (
                    <CartItem bookName={book.bookName} author={book.author} bookStoreName={book.bookStoreName}
                    imgPath={book.imgPath} quantity={book.quantity} price={book.price} />
                ))}
            </div>
        </Container>
    );
}

export default Cart;
