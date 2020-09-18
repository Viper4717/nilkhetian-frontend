import React, { useState, useEffect } from 'react';
import './Result.css';
import { Container} from 'react-bootstrap';
import ResultBookCard from './ResultBookCard';
import PaginationBar from '../paginationBar/PaginationBar'
import Himu from '../../assets/home/himuRimande.jpg'
import Axios from 'axios';
import { serverUrl } from '../../util';

var currentPageNo;
var totalPages = 1;

const productIdString = window.location.href.substring(
    window.location.href.indexOf("productId")+10, window.location.href.indexOf("&page"));
const urlPath = window.location.href.substring(
    window.location.href.indexOf("/results"), window.location.href.indexOf("page")+5);

function loadCurrentPage(setCurrentPage){
    currentPageNo = window.location.href.substring(
        window.location.href.indexOf("page=")+5, window.location.href.length);
    setCurrentPage(parseInt(currentPageNo, 10));
}

function loadResults(setResults){
    Axios
        .get(`${serverUrl}/concrete-products?productId=${productIdString}&page=${currentPageNo}`)
        .then(({data: res}) => {
            totalPages = res.totalPages;
            const newResults = res.results.map((book) => ({
                id: book._id,
                name: book.name,
                author: book.author,
                storeName: book.storeName,
                imgPath: Himu,
                price: book.price,
              }));
            setResults(newResults);
        })
        .catch((error) => {
            console.error(error);
            console.log('failed to load results');
        });
}

function Result() {

    const testBooks = [
        {
            id: "1",
            name: "Himu Rimande",
            author: "Humayun Ahmed",
            storeName: "Shameme Boi Bitan",
            imgPath: Himu,
            price: 300,
          },
          {
            id: "2",
            name: "Ami Ebong Amra",
            author: "Humayun Ahmed",
            storeName: "Shameme Boi Bitan",
            imgPath: Himu,
            price: 350,
          },
          {
            id: "3",
            name: "Angels and Demons",
            author: "Dan Brown",
            storeName: "Samin Er Bosta",
            imgPath: Himu,
            price: 700,
          },
          {
            id: "4",
            name: "The Da Vinci Code",
            author: "Dan Brown",
            storeName: "Samin Er Bosta",
            imgPath: Himu,
            price: 800,
          },
    ]

    const [currentResults, setResults] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        loadCurrentPage(setCurrentPage);
    }, [window.location.href.substring(
        window.location.href.indexOf("page=")+5, window.location.href.length)])
  
    useEffect(() => {
        loadResults(setResults);
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
            <div className="resultGrid">
                {testBooks.map(book => ( //it has to be currentresults
                    <ResultBookCard bookImgPath={book.imgPath} bookName={book.name}
                    bookAuthor={book.author} bookStoreName={book.storeName} bookPrice={book.price}/>
                ))}
            </div>
            <div className="paginationDiv">
                <PaginationBar maxLeft={maxLeft} maxRight={maxRight} lastPage={totalPages}
                currentPage={currentPage} urlPath={urlPath} />
            </div>
        </Container>
    );
}

export default Result;