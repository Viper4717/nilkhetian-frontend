import React, { useState } from 'react';
import './BookLibrary.css';
import Category from '../category/Category';
import BookCard from './BookCard'
import { Container, Button } from 'react-bootstrap';
import Himu from '../../assets/home/himuRimande.jpg'
import AmiEbongAmra from '../../assets/home/amiEbongAmra.jpg'
import AngelsAndDemons from '../../assets/home/angelsAndDemons.jpg'
import TheDaVinciCode from '../../assets/home/theDaVinciCode.jpg'

function BookLibrary() {

    const [categories, setCategories] = useState([
        "Fiction", "Drama", "Mystery", "Adventure", "Academic"
    ])

    const [currentCategory, setCurrentCategory] = useState("Fiction")

    const testBooks = [
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
    ]

    return (
        <Container fluid="md" className="parentContainer">
            <h2 className="storeHeader"> Nilkhet Online: All Available Books </h2>
            <div className="topButtonDiv">
                <Button className="bookCategoryButton" variant="custom">
                    Search by Store Names
                </Button>
            </div>
            <div className="categoryBgDiv">
                <Category categories={categories} currentCategory={currentCategory} 
                setCurrentCategory={setCurrentCategory} />
                <div className="bookBgDiv">
                    <div className="bookBgDivHeader">
                        <text className="bookDivHeader"> {currentCategory} </text>
                    </div>
                    <div className="bookGrid">
                        {testBooks.map(book => (
                            <BookCard bookImgPath={book.imgPath} bookName={book.bookName}
                            bookAuthor={book.author}/>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default BookLibrary;
