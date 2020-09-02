import React, { useState, useEffect } from 'react';
import './StoreFront.css';
import BookStoreImage from '../../assets/bookStore/bookStore.jpg'
import StoreCard from './StoreCard'
import PaginationBar from '../paginationBar/PaginationBar'
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
        {
          storeName: "Book Store 21",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          storeName: "Book Store 22",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          storeName: "Book Store 23",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          storeName: "Book Store 24",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          storeName: "Book Store 25",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          storeName: "Book Store 26",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
    ])
    
    const [currentPage, setCurrentPage] = useState(1);
    const storesPerPage = 12;
    const totalStores = 26;
    const lastPage = Math.ceil(totalStores/storesPerPage);
    const indexOfLastPost = currentPage * (storesPerPage > totalStores? totalStores : storesPerPage);
    const indexofFirstPost = indexOfLastPost - (storesPerPage > totalStores? totalStores : storesPerPage);
    const currentStores = stores.slice(indexofFirstPost, indexOfLastPost);

    return (
        <Container fluid="md" className="parentContainer smallHeight padBottomContainer">
            <h2 className="storeHeader"> Nilkhet Online: Store Front </h2>
            <div className="topButtonDiv">
                <Button className="bookCategoryButton" variant="custom">
                    Search by Book Categories
                </Button>
            </div>
            <div className="storeGrid">
                {currentStores.map(store => (
                    <StoreCard storeName={store.storeName} storeImgPath={store.storeImgPath}
                     storeDetails={store.storeDetails} />
                ))}
            </div>
            <div className="paginationDiv">
              <PaginationBar lastPage={lastPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </Container>
    );
}

export default StoreFront;
