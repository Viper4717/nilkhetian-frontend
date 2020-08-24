import React from 'react';
import './Home.css'
import WebsiteBanner from '../../assets/home/websiteBanner.jpg'
import { Button, Container } from 'react-bootstrap';

function Home() {
  return (
    <div>
        <Container>
        <img className="siteBanner"
            src={WebsiteBanner}
            alt="Website Banner"
        />
        <h2 className="siteHeading">
            Nilkhetian is an online platform that gives you the original 
            Nilkhet experience from the comfort of your home.
        </h2>
        <Button variant="primary">
            Explore our Library
        </Button>
        </Container>
    </div>
  );
}

export default Home;
