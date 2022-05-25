import React from 'react';
import Banner from '../components/Banner/Banner';
import Carousel from '../components/Carousel/Carousel';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { apiEntity } from '../apiConfig';

const Homepage = () => {
  return (
    <>
      <Banner />
      <Carousel entity = {apiEntity.popularMovies} title = {'Películas Populares'}/>
      <Carousel entity = {apiEntity.popularTv} title = {'Series Populares'}/>
      <Carousel entity = {apiEntity.topRatedMovies} title = {'Top Películas'}/>
    </>
  )
}

export default Homepage;