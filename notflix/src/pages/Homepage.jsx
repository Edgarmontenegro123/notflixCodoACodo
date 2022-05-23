import React from 'react';
import Banner from '../components/Banner/Banner';
import Carousel from '../components/Carousel/Carousel';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Homepage = () => {
  return (
    <>
      <Banner />
      <Carousel />
    </>
  )
}

export default Homepage;