import React from 'react'
import './ProductCard.scss'
//Imported Components


export default function ProductCard({ title, image, productName, gfCallout, productCallout}) {  
  return (
    <div class='ProductCard'>
      <div class='ProductCard__container'>
        <img class='ProductCard__image' src={image} alt={`${title}` &&  'image'}></img>
      </div>
      <div class='ProductCard__gfcallout'>
        <p>{gfCallout}</p>
      </div>
      <div class='ProductCard__content'>
        <p class='ProductCard__name'>{productName}</p>
        <p class='ProductCard__callout'>{productCallout}</p>
      </div>
    </div>
  )
}