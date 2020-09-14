import React, { useState, useEffect } from 'react';
import './StoreBrowse.css';
import Category from '../category/Category';
import StoreBookCard from './StoreBookCard';
import { Container } from 'react-bootstrap';
import Himu from '../../assets/home/himuRimande.jpg';
import AmiEbongAmra from '../../assets/home/amiEbongAmra.jpg';
import AngelsAndDemons from '../../assets/home/angelsAndDemons.jpg';
import TheDaVinciCode from '../../assets/home/theDaVinciCode.jpg';
import Axios from 'axios';
import { serverUrl } from '../../util';

const storeIdString = window.location.href.substring(
    window.location.href.indexOf("?")+1, window.location.href.indexOf("&category"));

var categoryIdString = window.location.href.substring(
    window.location.href.indexOf("&category")+10, window.location.href.length);

const urlPath = window.location.href.substring(
    window.location.href.indexOf("/store"), window.location.href.indexOf("&category="));

var storeName;

function firstLoad(setCategories, setCurrentCategory){
    Axios
        .get(`${serverUrl}/store?${storeIdString}`)
        .then(({data: res}) => {
            storeName = res.storeName
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
        .get(`${serverUrl}/store?${storeIdString}&category=${categoryIdString}`)
        .then(({data: res}) => {
            const newBooks = res.map((book) => ({
                id: book._id,
                bookName: book.name,
                author: book.author,
                bookImgPath: Himu,
                price: book.price,
              }));
            setBooks(newBooks);
        })
        .catch((error) => {
            console.error(error);
            console.log('failed to load category');
        });
}

function StoreBrowse() {

    const [categories, setCategories] = useState([
        "Fiction", "Drama", "Mystery", "Adventure", "Academic"
    ])
    const [currentCategory, setCurrentCategory] = useState("Fiction")
    const [currentBooks, setBooks] = useState([
        {
            bookName: "Himu Rimande",
            author: "Humayun Ahmed",
            imgPath: Himu,
            price: 300,
        },
        {
            bookName: "Ami Ebong Amra",
            author: "Humayun Ahmed",
            imgPath: AmiEbongAmra,
            price: 350,
        },
        {
            bookName: "Angels and Demons",
            author: "Dan Brown",
            imgPath: AngelsAndDemons,
            price: 800,
        },
        {
            bookName: "The Da Vinci Code",
            author: "Dan Brown",
            imgPath: TheDaVinciCode,
            price: 850,
        },
    ])

    useEffect(() => {
        firstLoad(setCategories, setCurrentCategory);
    }, []);

    useEffect(() => {
        loadCategory(setBooks)
    }, [currentCategory])

    return (
        <Container fluid="md" className="parentContainer">
            <h2 className="storeHeader"> {storeName} </h2>
            <div className="categoryBgDiv">
                <Category categories={categories} currentCategory={currentCategory} 
                setCurrentCategory={setCurrentCategory} urlPath={urlPath} />
                <div className="bookBgDiv">
                    <div className="bookBgDivHeader">
                        <text className="bookDivHeader"> {currentCategory} </text>
                    </div>
                    <div className="StoreBookGrid">
                        {currentBooks.map(book => (
                            <StoreBookCard bookImgPath={book.imgPath} bookName={book.bookName}
                            bookAuthor={book.author} bookPrice={book.price}/>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default StoreBrowse;
