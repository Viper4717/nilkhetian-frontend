import React, { useState } from 'react';
import './Home.css'
import WebsiteBanner from '../../assets/home/websiteBanner.jpg'
import MobileTopBanner from '../../assets/home/mobileTopBanner.png'
import Himu from '../../assets/home/himuRimande.jpg'
import AmiEbongAmra from '../../assets/home/amiEbongAmra.jpg'
import AngelsAndDemons from '../../assets/home/angelsAndDemons.jpg'
import TheDaVinciCode from '../../assets/home/theDaVinciCode.jpg'
import { Button, Container, Card, CardGroup } from 'react-bootstrap';
import {RiArrowRightCircleFill} from 'react-icons/ri'

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
    <Container fluid="md" className="parentContainer">
      <div>
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
            <Button className="exploreButtonWeb" variant="custom">
              EXPLORE NOW
            </Button>
          </Card.ImgOverlay>
        </Card>
        <Button className="exploreButtonMobile" variant="custom">
          EXPLORE NOW
        </Button>
      </div>
      <div className="cardDeck">
        <div className="cardDeckHeader">
          <h4 className="cardDeckTitle"> Top Category </h4>
          <div>
            <text className="moreButtonText">More</text>
              <a className="moreButton" href='#'>
                <RiArrowRightCircleFill size='2em'/>
              </a>
          </div>
        </div>
        <CardGroup>
          {topCategory.map((book) => (
            <Card className="bookCard">
              <Card.Title className="bookTitle">
                {book.bookName}
              </Card.Title>
              <Card.Text className="author">
                {book.author}
              </Card.Text>
              <div className="bookCoverBg">
                <Card.Img className="bookCover" src={book.imgPath} alt="Book Image"/>
              </div>
              <Card.Title className="bookStoreTitle">
                {book.bookStoreName}
              </Card.Title>
              <Card.Text className="bookPrice">
                {book.price}
              </Card.Text>
            </Card>
          ))}
        </CardGroup>
      </div>
    </Container>
  );
}

export default Home;
