import React, { useEffect, useState } from 'react'
import { apiBuilder } from '../../apiConfig';
import Styles from './Card.module.css';

const Card = ({title, imgPath}) => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const url = apiBuilder.tryGetPoster(imgPath);
    setImg(url);
  }, [imgPath])

  return (
    <div>
      <div style={{
        backgroundImage: `url(${img})`,
        }} 
        className = {Styles.card} >
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Card;