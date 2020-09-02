import React from 'react';
import './StoreFront.css';
import BookStoreImage from '../../assets/bookStore/bookStore.jpg'
import StoreCard from './StoreCard'
import { Container, Button} from 'react-bootstrap';

function StoreFront() {
    const testArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <Container fluid="md" className="parentContainer smallHeight padBottomContainer">
            <h2 className="storeHeader"> Nilkhet Online: Store Front </h2>
            <div className="topButtonDiv">
                <Button className="bookCategoryButton" variant="custom">
                    Search by Book Categories
                </Button>
            </div>
            <div className="storeGrid">
                {testArray.map(index => (
                    <StoreCard storeName="Book Store Name" storeImgPath={BookStoreImage}
                     storeDetails="This is where my friend, the details, the unique details
                     of the store, will be shown, proudly, gloriously." />
                ))}
            </div>
        </Container>
    );
}

export default StoreFront;
