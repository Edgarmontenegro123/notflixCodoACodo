import React from 'react'
import Styles from './Card.module.css';

const Card = () => {
  return (
    <div>
      <div /* className = {Styles.card} */ style={{backgroundColor: 'red'}}></div>
      <h1>Título</h1>
      <h2>Esto es un Carousel!</h2>
    </div>
  )
}

export default Card;