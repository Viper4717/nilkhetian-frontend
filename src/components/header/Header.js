import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <div>
        <Navbar className="shadow-lg p-1 mb-5" bg="primary" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home" style={{paddingLeft: "15px"}}>Nilkhetian</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Navbar.Text style={{paddingRight: "15px"}}>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">Link</Nav.Link>
                </Nav>
              </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Header;
