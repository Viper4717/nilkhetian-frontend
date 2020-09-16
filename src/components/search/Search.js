import React, { useState, useEffect } from 'react';
import './Search.css';
import { Container} from 'react-bootstrap';
import BookCard from '../bookLibrary/BookCard';
import PaginationBar from '../paginationBar/PaginationBar'
import Himu from '../../assets/home/himuRimande.jpg'
import AmiEbongAmra from '../../assets/home/amiEbongAmra.jpg'
import AngelsAndDemons from '../../assets/home/angelsAndDemons.jpg'
import TheDaVinciCode from '../../assets/home/theDaVinciCode.jpg'
import Axios from 'axios';
import { serverUrl } from '../../util';

//search?q=Blah&page=Blah
//products?search=Blah&page=Blah

var currentPageNo;
var totalPages = 1;

const searchString = window.location.href.substring(
    window.location.href.indexOf("?q=")+3, window.location.href.indexOf("&page"));
const urlPath = window.location.href.substring(
    window.location.href.indexOf("/search"), window.location.href.indexOf("page")+5);

function loadCurrentPage(setCurrentPage){
    currentPageNo = window.location.href.substring(
        window.location.href.indexOf("page=")+5, window.location.href.length);
    setCurrentPage(parseInt(currentPageNo, 10));
}

function loadResults(setResults){
    Axios
        .get(`${serverUrl}/products?search=${searchString}&page=${currentPageNo}`)
        .then(({data: res}) => {
            totalPages = res.totalPages;
            const newResults = res.results.map((book) => ({
                id: book._id,
                bookName: book.name,
                author: book.author,
                imgPath: Himu,
              }));
            setResults(newResults);
        })
        .catch((error) => {
            console.error(error);
            console.log('failed to load results');
        });
}

function Search() {

    const [currentResults, setResults] = useState([
      {
        bookName: "Himu Rimande",
        author: "Humayun Ahmed",
        imgPath: Himu,
      },
      {
        bookName: "Ami Ebong Amra",
        author: "Humayun Ahmed",
        imgPath: AmiEbongAmra,
      },
      {
        bookName: "Angels and Demons",
        author: "Dan Brown",
        imgPath: AngelsAndDemons,
      },
      {
        bookName: "The Da Vinci Code",
        author: "Dan Brown",
        imgPath: TheDaVinciCode,
      },
    ])
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
            <div className="searchGrid">
                {currentResults.map(book => (
                    <BookCard bookId={book.id} bookImgPath={book.imgPath} bookName={book.bookName}
                    bookAuthor={book.author}/>
                ))}
            </div>
            <div className="paginationDiv">
                <PaginationBar maxLeft={maxLeft} maxRight={maxRight} lastPage={totalPages}
                currentPage={currentPage} urlPath={urlPath} />
            </div>
        </Container>
    );
}

export default Search;