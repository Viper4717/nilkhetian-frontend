import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap';
import HeaderLogo from '../../assets/header/nilkhetianLogoHeader.png'
import MobileHeaderLogo from '../../assets/header/nilkhetianMobileLogoHeader.svg'
import { CgProfile, CgSearch, CgShoppingCart } from 'react-icons/cg';
import './Header.css';

function Header() {
  return (
    <div>
      <Navbar className="shadow-sm p-1 justify-content-between" expand="md" sticky="top">
        <Container>
          <Navbar.Brand className="webBrand" href="#home">
            <img
              src={HeaderLogo}
              width="180"
              height="40"
              alt="Nilkhetian Logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className="mobileBrand" href="#home">
            <img
              src={MobileHeaderLogo}
              width="50"
              height="50"
              alt="Nilkhetian Mobile Logo"
            />
          </Navbar.Brand>
          <Form inline>
            <div style={{display: "flex", flexDirection: "row"}}>
              <FormControl type="text" placeholder="Search Products" className="mr-sm-2" />
              <Button variant="custom" size='sm'>
                <CgSearch size='2em'/>
              </Button>
            </div>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav>
              <Nav.Link href="#home">
                <CgProfile size='2em'/>
                <h5 className="iconText">Profile</h5>
              </Nav.Link>
              <Nav.Link href="#home">
                <CgShoppingCart size='2em'/>
                <h5 className="iconText">Cart</h5>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
