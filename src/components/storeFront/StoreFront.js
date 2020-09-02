import React, { useState } from 'react';
import './StoreFront.css';
import BookStoreImage from '../../assets/bookStore/bookStore.jpg'
import StoreCard from './StoreCard'
import { Container, Button} from 'react-bootstrap';

function StoreFront() {
    const [stores, setStores] = useState([
        {
            storeName: "Book Store 1",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
                the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 2",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 3",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 4",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 5",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 6",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 7",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 8",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 9",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 10",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 11",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 12",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 13",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 14",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 15",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 16",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 17",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 18",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 19",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
            storeName: "Book Store 20",
            storeImgPath: BookStoreImage,
            storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
      ])
    return (
        <Container fluid="md" className="parentContainer smallHeight padBottomContainer">
            <h2 className="storeHeader"> Nilkhet Online: Store Front </h2>
            <div className="topButtonDiv">
                <Button className="bookCategoryButton" variant="custom">
                    Search by Book Categories
                </Button>
            </div>
            <div className="storeGrid">
                {stores.map(store => (
                    <StoreCard storeName={store.storeName} storeImgPath={store.storeImgPath}
                     storeDetails={store.storeDetails} />
                ))}
            </div>
        </Container>
    );
}

export default StoreFront;
