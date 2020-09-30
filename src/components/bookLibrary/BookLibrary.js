import React, { useState, useEffect } from 'react';
import './BookLibrary.css';
import Category from '../category/Category';
import BookCard from './BookCard'
import PaginationBar from '../paginationBar/PaginationBar';
import { Container, Button, Spinner } from 'react-bootstrap';
import Himu from '../../assets/home/himuRimande.jpg';
import Axios from 'axios';
import { serverUrl, reverseCategoryParse } from '../../util';
import { Link } from 'react-router-dom';

var categoryIdString;
var currentPageNo;
var totalPages = 1;
var urlPathForCat;
var afterCat;

function loadCurrentCateogry(setCurrentCategory){
    categoryIdString = window.location.href.substring(
        window.location.href.indexOf("?category=")+10, window.location.href.indexOf("&page"));
    setCurrentCategory(reverseCategoryParse(categoryIdString));
}

function loadCurrentPage(setCurrentPage){
    currentPageNo = window.location.href.substring(
      window.location.href.indexOf("page=")+5, window.location.href.length);
    setCurrentPage(parseInt(currentPageNo, 10));
}

function firstLoad(setCategories, setLoading){
    setLoading(true);
    Axios
        .get(`${serverUrl}/products`)
        .then(({data: res}) => {
            setCategories(res);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            console.log('failed to load initial data');
        });
}

function loadCategory(setBooks, setLoading){
    setLoading(true);
    Axios
        .get(`${serverUrl}/products?category=${categoryIdString}&page=${currentPageNo}`)
        .then(({data: res}) => {
            totalPages = res.totalPages;
            const newBooks = res.results.map((book) => ({
                id: book._id,
                name: book.name,
                author: book.author,
                imgPath: Himu,
            }));
            setBooks(newBooks);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            console.log('failed to load category');
        });
}

function BookLibrary() {

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState()
    const [currentBooks, setBooks] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        urlPathForCat = window.location.href.substring(
            window.location.href.indexOf("/products"), window.location.href.indexOf("category")+9);
        afterCat = window.location.href.substring(
            window.location.href.indexOf("&page"), window.location.href.indexOf("page")+5);
        firstLoad(setCategories, setLoading);
    }, [])
    
    useEffect(() => {
        loadCurrentCateogry(setCurrentCategory);
    }, [window.location.href.substring(
        window.location.href.indexOf("?category=")+10, window.location.href.indexOf("&page"))])

    useEffect(() => {
        loadCurrentPage(setCurrentPage);
    }, [window.location.href.substring(
        window.location.href.indexOf("page=")+5, window.location.href.length)])

    useEffect(() => {
        loadCategory(setBooks, setLoading);
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
            <h2 className="storeHeader"> Nilkhet Online: All Available Products </h2>
            <div className="topButtonDiv">
                <Button className="bookCategoryButton" variant="custom" as={Link} to="/stores?page=1">
                    Browse Stores
                </Button>
            </div>
            <div className="categoryBgDiv">
                <Category categories={categories} currentCategory={currentCategory} 
                 urlPath={urlPathForCat} />
                <div className="bookBgDiv">
                    <div className="bookBgDivHeader">
                        <text className="bookDivHeader"> {currentCategory} </text>
                    </div>
                    {loading?
                    <div className="loadingDiv">
                    <Spinner animation="border" role="status"/>
                    <h4 className="loadingText"> Loading... </h4>
                    </div>
                    :
                    <div className="bookGrid">
                        {currentBooks.map(book => (
                            <BookCard bookId={book.id} bookImgPath={book.imgPath} bookName={book.name}
                            bookAuthor={book.author}/>
                        ))}
                        <div className="paginationDiv">
                            <PaginationBar maxLeft={maxLeft} maxRight={maxRight} lastPage={totalPages}
                            currentPage={currentPage} urlPath={urlPathForCat+categoryIdString+afterCat} />
                        </div>
                    </div>
                    }
                </div>
            </div>
        </Container>
    );
}

export default BookLibrary;
