import React, { useState } from 'react';
import './StoreBrowse.css';
import Category from '../category/Category';
import StoreBookCard from './StoreBookCard';
import { Container, Button } from 'react-bootstrap';
import Himu from '../../assets/home/himuRimande.jpg';
import AmiEbongAmra from '../../assets/home/amiEbongAmra.jpg';
import AngelsAndDemons from '../../assets/home/angelsAndDemons.jpg';
import TheDaVinciCode from '../../assets/home/theDaVinciCode.jpg';
import Axios from 'axios';
import { serverUrl } from '../../util';

function StoreBrowse({match}) {

    const { params: { storeId } } = match;

    Axios
        .post(`${serverUrl}/store`, null, {params: {
            storeId,
        }})
        .then(({data: res}) => {
            
        })

    const [categories, setCategories] = useState([
        "Fiction", "Drama", "Mystery", "Adventure", "Academic"
    ])

    const [currentCategory, setCurrentCategory] = useState("Fiction")

    const testBooks = [
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
    ]

    return (
        <Container fluid="md" className="parentContainer">
            <h2 className="storeHeader"> Nilkhet Online: All Available Books </h2>
            <div className="categoryBgDiv">
                <Category categories={categories} currentCategory={currentCategory} 
                setCurrentCategory={setCurrentCategory} />
                <div className="bookBgDiv">
                    <div className="bookBgDivHeader">
                        <text className="bookDivHeader"> {currentCategory} </text>
                    </div>
                    <div className="StoreBookGrid">
                        {testBooks.map(book => (
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
