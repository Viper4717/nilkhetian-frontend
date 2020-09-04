import React, { useState } from 'react';
import './BookLibrary.css';
import Category from '../category/Category';
import { Container, Button } from 'react-bootstrap';

function BookLibrary() {

    const [categories, setCategories] = useState([
        "Fiction", "Drama", "Mystery", "Adventure", "Academic"
    ])

    return (
        <Container fluid="md" className="parentContainer">
            <h2 className="storeHeader"> Nilkhet Online: All Available Books </h2>
            <div className="topButtonDiv">
                <Button className="bookCategoryButton" variant="custom">
                    Search by Store Names
                </Button>
            </div>
            <div className="categoryBgDiv">
                <Category categories={categories}/>
                <div className="bookBgDiv">
                </div>
            </div>
        </Container>
    );
}

export default BookLibrary;
