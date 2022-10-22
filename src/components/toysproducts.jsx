import React from 'react'
import toys from './toys.json'

const Toysproducts = () => {
  return (
    <div className="toys">
        {
        toys.map(toys =>(
          <div className="product-card">
            <img src={toys.image} alt="product"/>
            <h3>{toys.title}</h3>
            <span>{toys.price}$</span>
            <button className='add-to-wishlist'>Add to Wishlist</button>
            <button className='buy-now'>BUY NOW!</button>
          </div>
        ))}
    </div>
  )
}

export default Toysproducts