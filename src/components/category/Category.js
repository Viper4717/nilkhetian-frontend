import React, { useState } from 'react';
import './Category.css';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Dropdown } from 'react-bootstrap';

function Category({categories, currentCategory, setCurrentCategory}) {
    return (
        <div className="categoryDiv">
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
                                <RiArrowRightSLine size="2em"/>
                            </a>
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
                            <Dropdown.Item onClick={() => setCurrentCategory(item)}
                             href="#">
                                 {item}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default Category;
