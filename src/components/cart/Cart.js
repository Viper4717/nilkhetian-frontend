import React, { useContext } from 'react';
import './Cart.css';
import EmptyCartImage from '../../assets/cart/emptyCartImage.png'
import { Container, Button, Image } from 'react-bootstrap';
import CartItem from './CartItem';
import { CartContext } from '../../CartContext';

function Cart() {

    const [cart, setCart] = useContext(CartContext);
    var productCost = cart.reduce((acc, item) => acc + item.price, 0);
    const shippingCost = 50;

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
                        <Button className="backToLibraryBtn" variant="remove">
                            Back to Library
                        </Button>
                        <Button className="continueBtn" variant="remove">
                            Continue
                        </Button>
                    </div>
                </div>
            }
        </Container>
    );
}

export default Cart;
