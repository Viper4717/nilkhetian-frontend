import React from 'react';
import './Category.css';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { categoryParse } from '../../util';

function Category({categories, currentCategory, urlPath}) {
    return (
        <div className="categoryDiv">
            <div className="categoryLeftDiv">
                <div className="categoryHeaderDiv">
                    <text className="categoryHeader">Categories</text>
                </div>
                <ul>
                    {categories.map((item) => (
                        <li>
                            <Link to={`${urlPath}${categoryParse(item)}&page=1`}
                            className={currentCategory === item? "activeCategory" : "inactiveCategory"}>
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
                            <Dropdown.Item>
                                <Link to={`${urlPath}${categoryParse(item)}&page=1`}>
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
