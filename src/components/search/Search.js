import React, { useState, useEffect } from 'react';
import './Search.css';
import { Container, Spinner } from 'react-bootstrap';
import BookCard from '../bookLibrary/BookCard';
import PaginationBar from '../paginationBar/PaginationBar'
import Himu from '../../assets/home/himuRimande.jpg'
import Axios from 'axios';
import { serverUrl } from '../../util';

var currentPageNo;
var searchStr;
var totalPages = 1;
var urlPath;

function loadCurrentPage(setCurrentPage){
    currentPageNo = window.location.href.substring(
        window.location.href.indexOf("page=")+5, window.location.href.length);
    setCurrentPage(parseInt(currentPageNo, 10));
}

function loadCurrentSearchString(setCurrentSearchString){
    searchStr = window.location.href.substring(
        window.location.href.indexOf("?q=")+3, window.location.href.indexOf("&page"));
    setCurrentSearchString(searchStr);
}

function loadResults(setResults, setLoading){
    setLoading(true);
    Axios
        .get(`${serverUrl}/products?search=${searchStr}&page=${currentPageNo}`)
        .then(({data: res}) => {
            totalPages = res.totalPages;
            const newResults = res.results.map((book) => ({
                id: book._id,
                name: book.name,
                author: book.author,
                imgPath: Himu,
              }));
            setResults(newResults);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            console.log('failed to load results');
        });
}

function Search() {

    const [loading, setLoading] = useState(true);
    const [currentResults, setResults] = useState([])
    const [currentSearchString, setCurrentSearchString] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        urlPath = window.location.href.substring(
            window.location.href.indexOf("/search"), window.location.href.indexOf("page")+5);
    }, [])

    useEffect(() => {
        loadCurrentSearchString(setCurrentSearchString);
    }, [window.location.href.substring(
        window.location.href.indexOf("?q=")+3, window.location.href.indexOf("&page"))])

    useEffect(() => {
        loadCurrentPage(setCurrentPage);
    }, [window.location.href.substring(
        window.location.href.indexOf("page=")+5, window.location.href.length)])

    useEffect(() => {
        loadResults(setResults, setLoading);
    }, [currentSearchString, currentPage])

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
            <h2 className="storeHeader"> Nilkhet Online </h2>
            {loading?
            <div className="loadingDiv">
            <Spinner animation="border" role="status"/>
            <h4 className="loadingText"> Loading... </h4>
            </div>
            :
            <div>
                <div className="searchGrid">
                    {currentResults.map(book => (
                        <BookCard bookId={book.id} bookImgPath={book.imgPath} bookName={book.name}
                        bookAuthor={book.author}/>
                    ))}
                </div>
                <div className="paginationDiv">
                    <PaginationBar maxLeft={maxLeft} maxRight={maxRight} lastPage={totalPages}
                    currentPage={currentPage} urlPath={urlPath} />
                </div>
            </div>
            }
        </Container>
    );
}

export default Search;