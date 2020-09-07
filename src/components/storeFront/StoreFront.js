import React, { useState, useEffect } from 'react';
import './StoreFront.css';
import BookStoreImage from '../../assets/bookStore/bookStore.jpg'
import StoreCard from './StoreCard'
import PaginationBar from '../paginationBar/PaginationBar'
import { Container, Button} from 'react-bootstrap';

function StoreFront() {
    const [stores, setStores] = useState([
        {
          id: "bookstore1",
          storeName: "Book Store 1",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
              the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore2",
          storeName: "Book Store 2",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore3",
          storeName: "Book Store 3",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore4",
          storeName: "Book Store 4",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore5",
          storeName: "Book Store 5",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore6",
          storeName: "Book Store 6",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore7",
          storeName: "Book Store 7",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore8",
          storeName: "Book Store 8",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore9",
          storeName: "Book Store 9",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore10",
          storeName: "Book Store 10",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore11",
          storeName: "Book Store 11",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore12",
          storeName: "Book Store 12",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore13",
          storeName: "Book Store 13",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore14",
          storeName: "Book Store 14",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore15",
          storeName: "Book Store 15",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore16",
          storeName: "Book Store 16",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore17",
          storeName: "Book Store 17",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore18",
          storeName: "Book Store 18",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore19",
          storeName: "Book Store 19",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore20",
          storeName: "Book Store 20",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore21",
          storeName: "Book Store 21",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore22",
          storeName: "Book Store 22",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore23",
          storeName: "Book Store 23",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore24",
          storeName: "Book Store 24",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore25",
          storeName: "Book Store 25",
          storeImgPath: BookStoreImage,
          storeDetails: "This is where my friend, the details, \
            the unique details of the store, will be shown, proudly, gloriously",
        },
        {
          id: "bookstore26",
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
                <Button className="bookCategoryButton" variant="custom" href="/books">
                    Search by Book Categories
                </Button>
            </div>
            <div className="storeGrid">
                {currentStores.map(store => (
                    <StoreCard storeId={store.id} storeName={store.storeName} storeImgPath={store.storeImgPath}
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
