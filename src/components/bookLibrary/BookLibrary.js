import React, { useState, useEffect } from 'react';
import './BookLibrary.css';
import Category from '../category/Category';
import BookCard from './BookCard'
import { Container, Button } from 'react-bootstrap';
import Himu from '../../assets/home/himuRimande.jpg'
import AmiEbongAmra from '../../assets/home/amiEbongAmra.jpg'
import AngelsAndDemons from '../../assets/home/angelsAndDemons.jpg'
import TheDaVinciCode from '../../assets/home/theDaVinciCode.jpg'
import Axios from 'axios';
import { serverUrl } from '../../util';

const parsedCategories = [];

var categoryIdString = window.location.href.substring(
    window.location.href.indexOf("?category=")+10, window.location.href.length);

function categoryParse(storeCategories){
    if(Array.isArray(storeCategories) && storeCategories.length){
        storeCategories.map(category => {
            var words = category.split(" ");
            var catName = "";
            var lower;
            for(var i = 0; i < words.length; i++){
                lower = words[i].toLowerCase();
                if(i > 0){
                    catName += ('-' + lower);
                }
                else{
                    catName += lower;
                }
            }
            parsedCategories.push(catName);
        })
    }
}

function firstLoad(setCategories, setCurrentCategory){
    Axios
        .get(`${serverUrl}/products`)
        .then(({data: res}) => {
            setCategories(res.categories)
            setCurrentCategory(res.categories[0])
        })
        .catch((error) => {
            console.error(error);
            console.log('failed to load initial data');
        });
}

function loadCategory(setBooks){
    Axios
        .get(`${serverUrl}/products?category=${categoryIdString}`)
        .then(({data: res}) => {
            const newBooks = res.map((book) => ({
                id: book._id,
                bookName: book.name,
                author: book.author,
                bookImgPath: Himu,
              }));
            setBooks(newBooks);
        })
        .catch((error) => {
            console.error(error);
            console.log('failed to load category');
        });
}

function BookLibrary() {

    const [categories, setCategories] = useState([
        "Fiction", "Drama", "Mystery", "Adventure", "Academic"
    ])
    const [currentCategory, setCurrentCategory] = useState("Fiction")
    const [currentBooks, setBooks] = useState([
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

    useEffect(() => {
        firstLoad(setCategories, setCurrentCategory);
        categoryParse(categories);
    }, []);

    useEffect(() => {
        loadCategory(setBooks)
    }, [currentCategory])

    return (
        <Container fluid="md" className="parentContainer">
            <h2 className="storeHeader"> Nilkhet Online: All Available Products </h2>
            <div className="topButtonDiv">
                <Button className="bookCategoryButton" variant="custom" href='/stores'>
                    Browse Stores
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
                        {currentBooks.map(book => (
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
