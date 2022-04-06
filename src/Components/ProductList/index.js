import React from 'react'
import './ProductList.scss'
import ProductCard from '../ProductCard'
import { products } from '../../data'
import propTypes from 'prop-types';

export default function ProductList() {
        return (
            <div className='ProductList__container'>
                {products.map(({name, callout, secondaryCallout, imgSrc, imgAlt}) => (
                    <ProductCard key={name} productName={name} productCallout={callout} imageSource={imgSrc} imageAlt={imgAlt} gfCallout={secondaryCallout}/>
                ))}
            </div>
        );
    };

ProductList.propTypes = {
    name: propTypes.string.isRequired,
    callout: propTypes.string.isRequired,
    secondaryCallout: propTypes.string.isRequired,
    imageSrc: propTypes.string.isRequired,
    imgAlt: propTypes.string.isRequired
}