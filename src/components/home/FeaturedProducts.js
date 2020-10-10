import React from 'react';
import './FeaturedProducts.css';
import BookCard from '../bookLibrary/BookCard';
import BookImage from '../../assets/home/bookClipart.png';
import { CardGroup } from 'react-bootstrap';
import { RiArrowRightCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { serverUrl } from '../../util';

function FeaturedProducts({cardDeckTitle, topCategories}) {

    return (
        <div className="cardDeck">
            <div className="cardDeckHeader">
                <h4 className="cardDeckTitle"> {cardDeckTitle} </h4>
                <div>
                    <text className="moreButtonText">More</text>
                    <Link className="moreButton" to='#'>
                        <RiArrowRightCircleFill size='2em'/>
                    </Link>
                </div>
            </div>
            <CardGroup className="bookCardGroup">
                {topCategories.map(book => (
                    <BookCard bookId={book.id} bookImgPath={book.img? serverUrl+book.img : BookImage} bookName={book.name}
                    bookAuthor={book.author}/>
                ))}
            </CardGroup>
        </div>
    );
  }
  
export default FeaturedProducts;