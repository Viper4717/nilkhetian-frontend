import React, { useState } from 'react';
import './Home.css'
import FeaturedProducts from './FeaturedProducts'
import WebsiteBanner from '../../assets/home/websiteBanner.jpg'
import MidBanner from '../../assets/home/midBanner.jpg'
import MidBanner2 from '../../assets/home/midBanner2.jpg'
import MobileTopBanner from '../../assets/home/mobileTopBanner.png'
import Himu from '../../assets/home/himuRimande.jpg'
import AmiEbongAmra from '../../assets/home/amiEbongAmra.jpg'
import AngelsAndDemons from '../../assets/home/angelsAndDemons.jpg'
import TheDaVinciCode from '../../assets/home/theDaVinciCode.jpg'
import { Button, Container, Card } from 'react-bootstrap';

function Home() {
  const [topCategory, setTopCategory] = useState([
    {
      bookName: "Himu Rimande",
      author: "Humayun Ahmed",
      bookStoreName: "Shameme Boi Bitan",
      imgPath: Himu,
      price: 300,
    },
    {
      bookName: "Ami Ebong Amra",
      author: "Humayun Ahmed",
      bookStoreName: "Shameme Boi Bitan",
      imgPath: AmiEbongAmra,
      price: 350,
    },
    {
      bookName: "Angels and Demons",
      author: "Dan Brown",
      bookStoreName: "Samin Er Bosta",
      imgPath: AngelsAndDemons,
      price: 700,
    },
    {
      bookName: "The Da Vinci Code",
      author: "Dan Brown",
      bookStoreName: "Samin Er Bosta",
      imgPath: TheDaVinciCode,
      price: 800,
    },
  ])

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
            <Button className="exploreButtonWeb" variant="custom" href="/store">
              EXPLORE NOW
            </Button>
          </Card.ImgOverlay>
        </Card>
        <Button className="exploreButtonMobile" variant="custom" href="/store">
          EXPLORE NOW
        </Button>
      </div>
      <FeaturedProducts cardDeckTitle="Top Category" topCategory={topCategory}/>
      <div className="whiteDiv">
        <Card className="midBanner">
          <Card.Img className="midBannerImage" src={MidBanner} alt="Site Banner"/>
        </Card>
      </div>
      <FeaturedProducts cardDeckTitle="Book Category" topCategory={topCategory}/>
      <div className="whiteDiv">
        <Card className="midBanner">
          <Card.Img className="midBannerImage" src={MidBanner2} alt="Site Banner"/>
        </Card>
      </div>
      <FeaturedProducts cardDeckTitle="Book Category" topCategory={topCategory}/>
    </Container>
  );
}

export default Home;
