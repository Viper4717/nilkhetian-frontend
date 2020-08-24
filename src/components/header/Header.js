import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import HeaderLogo from '../../assets/nilkhetianLogoHeader.png'
import { CgProfile, CgSearch, CgShoppingCart } from 'react-icons/cg';
import './Header.css';

function Header() {
  return (
    <div>
      <Navbar className="shadow-sm p-1 mb-5" expand="lg" sticky="top">
          <Navbar.Brand href="#home">
          <img
            src={HeaderLogo}
            width="180"
            height="40"
            className="d-inline-block align-top"
            alt="Nilkhetian Logo"
          />
        </Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search Products" className="mr-sm-2" />
          {/*<><style type="text/css">
            {`
              .btn-custom {
                background-color: #ffa500;
                color: white;
              }
            `}
          </style>*/}
          <Button variant="custom" size='sm'>
            <CgSearch size='2em'/>
          </Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text>
            <Nav className="mr-auto">
                <Nav.Link href="#home">
                  <CgProfile size='2em'/>
                  <h5 className="iconText">Profile</h5>
                </Nav.Link>
                <Nav.Link href="#home">
                  <CgShoppingCart size='2em'/>
                  <h5 className="iconText">Cart</h5>
                </Nav.Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
