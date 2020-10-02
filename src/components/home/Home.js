import React, { useState, useEffect } from 'react';
import './Home.css'
import FeaturedProducts from './FeaturedProducts'
import WebsiteBanner from '../../assets/home/websiteBanner.jpg'
import MidBanner from '../../assets/home/midBanner.jpg'
import MidBanner2 from '../../assets/home/midBanner2.jpg'
import MobileTopBanner from '../../assets/home/mobileTopBanner.png'
import { Button, Container, Card } from 'react-bootstrap';
import Axios from 'axios';
import { serverUrl } from '../../util';
import { Link } from 'react-router-dom';

function loadFeaturedCategories(setTopCategories){
  Axios
  .get(`${serverUrl}/homeCategory`)
  .then(({data: res}) => {
    const newCategories = res;
    setTopCategories(newCategories);
  })
  .catch((error) => {
    console.error(error);
    console.log('failed to load categories');
  });
}

function Home() {
  const [topCategories, setTopCategories] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    loadFeaturedCategories(setTopCategories);
  }, [])

  return (
    <Container fluid="md" className="parentContainer padBottomContainer">
      <div className="whiteDiv">
        <img className="mobileTopBanner" src={MobileTopBanner}/>
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
          <Card.ImgOverlay className="buttonOverlay">
            <Button className="exploreButtonWeb" variant="custom" as={Link} to="/stores?page=1">
              EXPLORE NOW
            </Button>
          </Card.ImgOverlay>
        </Card>
        <Button className="exploreButtonMobile" variant="custom" as={Link} to="/stores?page=1">
          EXPLORE NOW
        </Button>
      </div>
      {topCategories.length > 0 &&
      <FeaturedProducts cardDeckTitle={topCategories[0].category} topCategories={topCategories[0].products}/>}
      <div className="whiteDiv">
        <Card className="midBanner">
          <Card.Img className="midBannerImage" src={MidBanner} alt="Site Banner"/>
        </Card>
      </div>
      {topCategories.length > 0 &&
      <FeaturedProducts cardDeckTitle={topCategories[0].category} topCategories={topCategories[0].products}/>}
      <div className="whiteDiv">
        <Card className="midBanner">
          <Card.Img className="midBannerImage" src={MidBanner2} alt="Site Banner"/>
        </Card>
      </div>
      {topCategories.length > 0 &&
      <FeaturedProducts cardDeckTitle={topCategories[0].category} topCategories={topCategories[0].products}/>}
    </Container>
  );
}

export default Home;
