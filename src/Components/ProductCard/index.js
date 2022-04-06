import React from 'react'
import './ProductCard.scss'
import PropTypes from 'prop-types'


export default function ProductCard({ imageAlt, imageSource, productName, gfCallout, productCallout}) {  
  return (
    <div className='ProductCard'>
      <div>
        <img className='ProductCard__image' src={imageSource} alt={`${imageAlt}`}></img>
      </div>
      <div>
        <p className='ProductCard__gfcallout'>{gfCallout}</p>
      </div>
      <div className='ProductCard__content'>
        <p className='ProductCard__name'>{productName}</p>
        <p className='ProductCard__callout'>{productCallout}</p>
      </div>
    </div>
  )

}

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  gfCallout: PropTypes.string.isRequired,
  productCallout: PropTypes.string.isRequired,
}