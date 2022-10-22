import React from 'react'
import bestseller from './bestseller.json'


const Bestseller = () => {
    return (
      
        <div className="bestseller-products">
          {
          bestseller.map(bestseller =>(
            <div className="product-card">
              <img src={bestseller.image} alt="product"/>
              <h3>{bestseller.title}</h3>
              <span>{bestseller.price}$</span>
              <button className='add-to-wishlist'>Add to Wishlist</button>
              <button className='buy-now'>BUY NOW!</button>
            </div>
          ))}
      </div>
    )}
  
  
  export default Bestseller