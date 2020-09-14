import React, { useState } from 'react';
import './Category.css';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function categoryParse(item){
    var words = item.split(" ");
    var catName = "";
    for(var i = 0; i < words.length; i++){
        if(i > 0){
            catName += ('+' + words[i]);
        }
        else{
            catName += words[i];
        }
    }
    return catName;
}

function Category({categories, currentCategory, setCurrentCategory, urlPath}) {
    return (
        <div className="categoryDiv">
            <div className="categoryLeftDiv">
                <div className="categoryHeaderDiv">
                    <text className="categoryHeader">Categories</text>
                </div>
                <ul>
                    {categories.map((item) => (
                        <li>
                            <Link to={`${urlPath}&category=${categoryParse(item)}`}
                            className={currentCategory === item? "activeCategory" : "inactiveCategory"}
                            onClick={() => setCurrentCategory(item)}>
                                {item}
                                <RiArrowRightSLine size="2em"/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="categoryDropdownDiv">
                <Dropdown>
                    <Dropdown.Toggle className="categoryDropdownBtn" variant="custom" id="dropdown-basic">
                        {currentCategory}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {categories.map(item => (
                            <Dropdown.Item onClick={() => setCurrentCategory(item)}>
                                <Link to={`${urlPath}&category=${categoryParse(item)}`}>
                                    {item}
                                </Link>
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default Category;
