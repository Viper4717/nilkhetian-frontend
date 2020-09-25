import React, { useState, useEffect } from 'react';
import './StoreBrowse.css';
import Category from '../category/Category';
import StoreBookCard from './StoreBookCard';
import PaginationBar from '../paginationBar/PaginationBar';
import { Container } from 'react-bootstrap';
import Himu from '../../assets/home/himuRimande.jpg';
import Axios from 'axios';
import { serverUrl, reverseCategoryParse } from '../../util';

var categoryIdString;
var currentPageNo;
var totalPages = 1;
var storeName;

const storeIdString = window.location.href.substring(
    window.location.href.indexOf("id")+3, window.location.href.indexOf("&category"));
const urlPathForCat = window.location.href.substring(
    window.location.href.indexOf("/store"), window.location.href.indexOf("category")+9);
const afterCat = window.location.href.substring(
    window.location.href.indexOf("&page"), window.location.href.indexOf("page")+5);

function loadCurrentCateogry(setCurrentCategory){
    categoryIdString = window.location.href.substring(
        window.location.href.indexOf("&category")+10, window.location.href.indexOf("&page"));
    setCurrentCategory(reverseCategoryParse(categoryIdString));
}

function loadCurrentPage(setCurrentPage){
    currentPageNo = window.location.href.substring(
      window.location.href.indexOf("page=")+5, window.location.href.length);
    setCurrentPage(parseInt(currentPageNo, 10));
}

function firstLoad(setCategories){
    Axios
        .get(`${serverUrl}/store?id=${storeIdString}`)
        .then(({data: res}) => {
            storeName = res.storeName
            setCategories(res.categories)
        })
        .catch((error) => {
            console.error(error);
            console.log('failed to load initial data');
        });
}

function loadCategory(setBooks){
    Axios
        .get(`${serverUrl}/concrete-products?storeId=${storeIdString}&category=${categoryIdString}&page=${currentPageNo}`)
        .then(({data: res}) => {
            totalPages = res.totalPages;
            const newBooks = res.results.map((book) => ({
                id: book._id,
                name: book.name,
                author: book.author,
                storeName: book.storeName,
                imgPath: Himu,
                price: book.price,
              }));
            setBooks(newBooks);
        })
        .catch((error) => {
            console.error(error);
            console.log('failed to load category');
        });
}

function StoreBrowse() {

    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState()
    const [currentBooks, setBooks] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        loadCurrentCateogry(setCurrentCategory);
    }, [window.location.href.substring(
        window.location.href.indexOf("?category=")+10, window.location.href.indexOf("&page"))])

    useEffect(() => {
        loadCurrentPage(setCurrentPage);
    }, [window.location.href.substring(
        window.location.href.indexOf("page=")+5, window.location.href.length)])

    useEffect(() => {
        firstLoad(setCategories);
    }, [])

    useEffect(() => {
        loadCategory(setBooks);
    }, [currentCategory, currentPage])

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
        <Container fluid="md" className="parentContainer">
            <h2 className="storeHeader"> {storeName} </h2>
            <div className="categoryBgDiv">
                <Category categories={categories} currentCategory={currentCategory} 
                 urlPath={urlPathForCat} />
                <div className="bookBgDiv">
                    <div className="bookBgDivHeader">
                        <text className="bookDivHeader"> {currentCategory} </text>
                    </div>
                    <div className="StoreBookGrid">
                        {currentBooks.map(book => (
                            <StoreBookCard bookId={book.id} bookImgPath={book.imgPath} bookName={book.name}
                            bookStoreName={book.storeName} bookAuthor={book.author} bookPrice={book.price}/>
                        ))}
                        <div className="paginationDiv">
                            <PaginationBar maxLeft={maxLeft} maxRight={maxRight} lastPage={totalPages}
                            currentPage={currentPage} urlPath={urlPathForCat+categoryIdString+afterCat} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default StoreBrowse;
