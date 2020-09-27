import React, { useState, useEffect } from 'react';
import './StoreFront.css';
import BookStoreImage from '../../assets/bookStore/bookStore.jpg'
import StoreCard from './StoreCard'
import PaginationBar from '../paginationBar/PaginationBar'
import { Container, Button} from 'react-bootstrap';
import Axios from 'axios';
import { serverUrl, categoryParse } from '../../util';
import { Link } from 'react-router-dom';

var firstCategory = "Fiction";
var currentPageNo;
var totalPages = 1;
const urlPath = window.location.href.substring(
  window.location.href.indexOf("/stores"), window.location.href.indexOf("page"+5));

function loadCurrentPage(setCurrentPage){
  currentPageNo = window.location.href.substring(
    window.location.href.indexOf("page=")+5, window.location.href.length);
  setCurrentPage(parseInt(currentPageNo, 10));
}

function loadStores(setStores){
  Axios
  .get(`${serverUrl}/stores?page=${currentPageNo}`)
  .then(({data: res}) => {
    totalPages = res.totalPages;
    const newStores = res.results.map((store) => ({
      id: store._id,
      storeName: store.storeName,
      storeImgPath: BookStoreImage,
      storeDetails: store.storeDetails,
      storeCategories: store.categories,
    }));
    setStores(newStores);
  })
  .catch((error) => {
    console.error(error);
    console.log('failed to load stores');
  });
  Axios
    .get(`${serverUrl}/products`)
    .then(({data: res}) => {
        firstCategory = categoryParse(res[0]);
    })
    .catch((error) => {
        console.error(error);
        console.log('failed to load first category');
    });
}

function StoreFront() {
    const [stores, setStores] = useState([]);
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
      loadCurrentPage(setCurrentPage);
    }, [window.location.href.substring(
        window.location.href.indexOf("page=")+5, window.location.href.length)])

    useEffect(() => {
      loadStores(
        setStores,
      );
    }, [currentPage]);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

    const pageBarLimit = 5;
    var maxLeft = currentPage - Math.floor(pageBarLimit/2);
    var maxRight = currentPage + Math.floor(pageBarLimit/2);
    if(maxLeft < 1){
      maxLeft = 1;
      maxRight = (pageBarLimit > totalPages? totalPages : pageBarLimit);
    }
    if(maxRight > totalPages){
      maxLeft = (pageBarLimit > totalPages? 1 : totalPages - (pageBarLimit - 1));
      maxRight = totalPages;
      if(maxLeft < 1){
        maxLeft = 1;
      }
    }

    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h2 className="storeHeader"> Nilkhet Online: Store Front </h2>
            <div className="topButtonDiv">
                <Button className="bookCategoryButton" variant="custom" as={Link}
                to={`/products?category=${firstCategory}&page=1`}>
                    Browse Books/Stationaries
                </Button>
            </div>
            <div className="storeGrid">
                {stores.map(store => (
                    <StoreCard storeId={store.id} storeName={store.storeName} storeImgPath={store.storeImgPath}
                     storeDetails={store.storeDetails} storeCategories={store.storeCategories} />
                ))}
            </div>
            <div className="paginationDiv">
              <PaginationBar maxLeft={maxLeft} maxRight={maxRight} lastPage={totalPages}
               currentPage={currentPage} urlPath={urlPath} />
            </div>
        </Container>
    );
}

export default StoreFront;
