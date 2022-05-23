import { useEffect } from 'react';
import { apiEntity } from '../../apiConfig';
import useApi from '../../hooks/useApi.js';
import Styles from './Banner.module.css';
import Separator from '../Separator/Separator';

const Banner = () => {
  const [movie, loading, error, randomMovie, backImg] = useApi(apiEntity.popularMovies);

  useEffect(() => {
    if(movie) {
      console.log(movie);
    }
  }, [movie])

  return (
    <div>
      <div className = {`${Styles.banner_container} ${Styles.banner_content}`}
           style = {
             loading?
             {backgroundImage: 'none'} :
             {backgroundImage: `url(${backImg})`}
           }>
        <div className = {Styles.banner_gradient}>
          <Separator heigh = '40%' />
          <div className = {Styles.banner_title}>
           <h1>{loading? 'Loading...' : randomMovie?.title}</h1>
          </div>
          <Separator heigh = '40px' />
          <div>
            <h2>{loading? 'Loading...' : randomMovie?.overview}</h2>
          </div>
          <div className = {Styles.banner_button}>
            <button 
              className = {Styles.banner_button} 
              onClick = {() => {
              console.log(movie)
             }}> Más Información
            </button> 
            <button className = {Styles.banner_button}>Reproducir</button>                
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;