import React from 'react'
import './ProductList.scss'
import ProductCard from '../ProductCard'

export default function ProductList() {  
  return (
    <div class='ProductList__container'>
      <ProductCard
          image={'./Images/best-seller-featured-image.png'}
          title={'Bestseller'}
          productName={'Huel Bestseller Bundle'}
          productCallout={'Find your favourite'}
          gfCallout={'Gluten-free'}
          />
      <ProductCard
          image={'./Images/hot-and-savoury-featured-image.png'}
          title={'Hot and Savoury'}
          productName={'Huel Hot & Savoury'}
          productCallout={'Find your favourite'}
          gfCallout={'Gluten-free'}
          />
      <ProductCard
          image={'./Images/complete-protein-featured-image.png'}
          title={'Complete Protein'}
          productName={'Huel Complete Protein'}
          productCallout={'Find your favourite'}
          gfCallout={'Gluten-free'}
          />
      <ProductCard
          image={'./Images/huel-bar-featured-image.png'}
          title={'Huel Bar'}
          productName={'Huel Bar v3.1'}
          productCallout={'Find your favourite'}
          gfCallout={'Gluten-free'}
          />
      <ProductCard
          image={'./Images/huel-powder-v3.0-featured-image.png'}
          title={'Huel Powder'}
          productName={'Huel Powder v3.0'}
          productCallout={'Find your favourite'}
          gfCallout={'Gluten-free'}
          />
      <ProductCard
          image={'./Images/ready-to-drink-featured-image.png'}
          title={'Ready to Drink'}
          productName={'Huel Ready to Drink'}
          productCallout={'Find your favourite'}
          gfCallout={'Gluten-free'}
          />
      </div>
  )
}