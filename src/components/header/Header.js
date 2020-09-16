import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap';
import HeaderLogo from '../../assets/header/nilkhetianLogoHeader.png'
import MobileHeaderLogo from '../../assets/header/nilkhetianMobileLogoHeader.svg'
import { CgProfile, CgSearch, CgShoppingCart } from 'react-icons/cg';
import './Header.css';
import { categoryParse } from '../../util';

function Header() {

  const [searchText, setSearchText] = useState();

  function parseSearchText(e){
    setSearchText(categoryParse(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.location.assign(`/search?q=${searchText}&page=1`);
  } 

  return (
    <Navbar className="shadow-sm p-1 justify-content-between" bg="light" expand="md" sticky="top">
      <Container fluid="md" className="headerContainer">
        <Navbar.Brand className="webBrand" href="/">
          <img
            src={HeaderLogo}
            width="180"
            height="40"
            alt="Nilkhetian Logo"
          />
        </Navbar.Brand>
        <Navbar.Brand className="mobileBrand" href="/">
          <img
            src={MobileHeaderLogo}
            width="50"
            height="50"
            alt="Nilkhetian Mobile Logo"
          />
        </Navbar.Brand>
        <Form className="searchBar" onSubmit={handleSubmit}>
          <div style={{display: "flex", flexDirection: "row"}}>
            <FormControl type="text" placeholder="Search Products" className="mr-sm-2" 
            onChange={parseSearchText}/>
            <Button variant="custom" type="submit" size='sm'>
              <CgSearch size='2em'/>
            </Button>
          </div>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapsedNavbar" id="basic-navbar-nav" >
          <Nav>
            <Nav.Link href="/login">
              <CgProfile size='2em'/>
              <h5 className="iconText">Profile</h5>
            </Nav.Link>
            <Nav.Link href="/cart">
              <CgShoppingCart size='2em'/>
              <h5 className="iconText">Cart</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
