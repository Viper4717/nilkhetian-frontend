import React, { useState, useEffect } from 'react';
import './Result.css';
import { Container, Spinner } from 'react-bootstrap';
import ResultBookCard from './ResultBookCard';
import PaginationBar from '../paginationBar/PaginationBar';
import Himu from '../../assets/home/himuRimande.jpg';
import Axios from 'axios';
import { serverUrl } from '../../util';

var currentPageNo;
var totalPages = 1;
var productIdString;
var urlPath;

function loadCurrentPage(setCurrentPage){
    currentPageNo = window.location.href.substring(
        window.location.href.indexOf("page=")+5, window.location.href.length);
    setCurrentPage(parseInt(currentPageNo, 10));
}

function loadResults(setResults, setLoading, setNotFound){
    setLoading(true);
    Axios
        .get(`${serverUrl}/concrete-products?productId=${productIdString}&page=${currentPageNo}`)
        .then(({data: res}) => {
            if(res.totalPages == 0){
                setLoading(false);
                setNotFound(true);
            }
            else{
                totalPages = res.totalPages;
                const newResults = res.results.map((book) => ({
                    id: book._id,
                    name: book.name,
                    author: book.author,
                    storeName: book.storeName,
                    imgPath: serverUrl+book.img,
                    price: book.price,
                }));
                setResults(newResults);
                setLoading(false);
                setNotFound(false);
            }
        })
        .catch((error) => {
            console.error(error);
            console.log('failed to load results');
        });
}

function Result() {

    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [currentResults, setResults] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        productIdString = window.location.href.substring(
            window.location.href.indexOf("productId")+10, window.location.href.indexOf("&page"));
        urlPath = window.location.href.substring(
            window.location.href.indexOf("/results"), window.location.href.indexOf("page")+5);
    }, [])

    useEffect(() => {
        loadCurrentPage(setCurrentPage);
    }, [window.location.href.substring(
        window.location.href.indexOf("page=")+5, window.location.href.length)])
  
    useEffect(() => {
        loadResults(setResults, setLoading, setNotFound);
    }, [currentPage])

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
                {notFound &&
                <div className="loadingDiv">
                    <h4 className="loadingText"> No results found! </h4>
                </div>
                }
                <div className="resultGrid">
                    {currentResults.map(book => (
                        <ResultBookCard bookId={book.id} bookImgPath={book.imgPath} bookName={book.name}
                        bookAuthor={book.author} bookStoreName={book.storeName} bookPrice={book.price}/>
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

export default Result;