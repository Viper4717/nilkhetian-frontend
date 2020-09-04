import React, { useState } from 'react';
import './Category.css';
import { Container } from 'react-bootstrap';

function Category({categories}) {

    const [currentCategory, setCurrentCategory] = useState("none")

    return (
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
    );
}

export default Category;
