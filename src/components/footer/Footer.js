import React from 'react';
import './Footer.css'
import { Container } from 'react-bootstrap';
import { FaFacebookSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footerBG">
      <Container fluid="md" className="footerContainer">
        <div className="footerLeft">
          <div className="footerTop">
            <text className="footerTitle">Nilkhetian</text><br/>
            <text className="footerSecondaryTitle">By Quixx</text>
          </div>
          <div className="footerMiddle">
            <text>123, Main Street, New York</text><br/>
            <text>Dummy address for now</text>
          </div>
          <div className="footerBottom">
            <a href="https://www.facebook.com/nilkhetian" target="_blank">
              <FaFacebookSquare size='2.5em'/>
            </a>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerTop">
            <text className="invisibleFooterTitle"></text><br/>
            <text className="footerSecondaryTitle">Contact Us</text>
          </div>
          <div className="footerMiddle">
            <text>+8801723456789</text><br/>
            <text>nilkhetian@gmail.com</text>
          </div>
          <div className="footerBottom">
            <text>All Rights Reserved</text><br/>
            <text>Nilkhetian © 2020</text>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
