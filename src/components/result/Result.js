import React from 'react';
import './Result.css';
import ResultBookCard from './ResultBookCard';
import { Container} from 'react-bootstrap';
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
    return (
        <Container fluid="md" className="parentContainer smallHeight">
            <h2 className="storeHeader"> Nilkhet Online </h2>
            <div className="resultGrid">
                {testBooks.map(book => (
                    <ResultBookCard imgPath={book.imgPath} bookName={book.bookName}
                    author={book.author} bookStoreName={book.bookStoreName} price={book.price}/>
                ))}
            </div>
        </Container>
    );
}

export default Result;