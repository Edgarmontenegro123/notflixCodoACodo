import React from 'react';
import Slider from 'react-slick';
import { apiEntity } from '../../apiConfig';
import useApi from '../../hooks/useApi';
import Card from '../Card/Card';
import Separator from '../Separator/Separator';
import { settingSliders } from './settingsSlider';

const Carousel = ({entity, title}) => {

  const [movies, loading, error] = useApi(entity);

  return (
    <>
    <h2 style = {{color: 'whitesmoke'}}>{title}</h2>
      <Slider {...settingSliders} style={{backgroundColor: 'blue'}}>
        {
          loading? (
            <h1>Loading...</h1>
          ) : (
            movies.map((movie) => (
              <Card key = {movie.id} 
                    title = {movie.title || movie.name}
                    imgPath = {movie.backdrop_path} />
            ))
          )
        }
      </Slider>
      <Separator height={'20px'}/>
    </>
  )
}

export default Carousel;