import React, { useState, useEffect } from 'react';
import './Result.css';
import { Container} from 'react-bootstrap';
import ResultBookCard from './ResultBookCard';
import PaginationBar from '../paginationBar/PaginationBar'
import Himu from '../../assets/home/himuRimande.jpg'
import AmiEbongAmra from '../../assets/home/amiEbongAmra.jpg'
import AngelsAndDemons from '../../assets/home/angelsAndDemons.jpg'
import TheDaVinciCode from '../../assets/home/theDaVinciCode.jpg'

function Result() {

    const testBooks = [
        {
          bookName: "Himu Rimande",
          author: "Humayun Ahmed",
          bookStoreName: "Shameme Boi Bitan",
          imgPath: Himu,
          price: 300,
        },
        {
          bookName: "Ami Ebong Amra",
          author: "Humayun Ahmed",
          bookStoreName: "Shameme Boi Bitan",
          imgPath: AmiEbongAmra,
          price: 350,
        },
        {
          bookName: "Angels and Demons",
          author: "Dan Brown",
          bookStoreName: "Samin Er Bosta",
          imgPath: AngelsAndDemons,
          price: 700,
        },
        {
          bookName: "The Da Vinci Code",
          author: "Dan Brown",
          bookStoreName: "Samin Er Bosta",
          imgPath: TheDaVinciCode,
          price: 800,
        },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 9;
    const totalResults = 4;
    const lastPage = Math.ceil(totalResults/resultsPerPage);
    const indexOfLastPost = currentPage * (resultsPerPage > totalResults? totalResults : resultsPerPage);
    const indexofFirstPost = indexOfLastPost - (resultsPerPage > totalResults? totalResults : resultsPerPage);
    const currentResults = testBooks.slice(indexofFirstPost, indexOfLastPost);

    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h2 className="storeHeader"> Nilkhet Online </h2>
            <div className="resultGrid">
                {currentResults.map(book => (
                    <ResultBookCard imgPath={book.imgPath} bookName={book.bookName}
                    author={book.author} bookStoreName={book.bookStoreName} price={book.price}/>
                ))}
            </div>
            <div className="paginationDiv">
              <PaginationBar lastPage={lastPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </Container>
    );
}

export default Result;