import React, { useState } from 'react';
import './Category.css';
import { Container } from 'react-bootstrap';

function Category() {

    const [categories, setCategories] = useState([
        "Fiction", "Drama", "Mystery", "Adventure", "Academic"
    ])

    const [currentCategory, setCurrentCategory] = useState("none")

    return (
        <Container fluid="md" className="parentContainer">
            <div className="categoryLeftDiv">
                <div className="categoryHeaderDiv">
                    <text className="categoryHeader">Categories</text>
                </div>
                <ul>
                    {categories.map(item => (
                        <li>
                            <a className={currentCategory === item? "activeCategory" : "inactiveCategory"}
                                onClick={() => setCurrentCategory(item)} href='#'>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}

export default Category;
