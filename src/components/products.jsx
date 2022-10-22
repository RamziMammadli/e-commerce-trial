import React from 'react'
import data from './data.json'


const Products = () => {
  return (
    
      <div className="products">
        {
        data.map(data =>(
          <div className="product-card">
            <img src={data.image} alt="product"/>
            <h3>{data.title}</h3>
            <span>{data.price}$</span>
            <button className='add-to-wishlist'>Add to Wishlist</button>
            <button className='buy-now'>BUY NOW!</button>
          </div>
        ))}
    </div>
  )}


export default Products