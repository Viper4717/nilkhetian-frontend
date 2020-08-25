import React from 'react';
import './Home.css'
import WebsiteBanner from '../../assets/home/websiteBanner.jpg'
import { Button, Container, Card } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Container>
        <Card className="siteBanner">
          <Card.Img className="bannerImage" src={WebsiteBanner} alt="Site Banner"/>
            <Card.ImgOverlay className="bannerOverlay">
              <Card.Title className="bannerTitle">
                  Welcome to Nilkhetian
              </Card.Title>
              <Card.Text className="bannerText">
                An online platform that gives you
                the original Nilkhet experience from
                the comfort of your Home.
              </Card.Text>
            </Card.ImgOverlay>
        </Card>
      </Container>
    </div>
  );
}

export default Home;
