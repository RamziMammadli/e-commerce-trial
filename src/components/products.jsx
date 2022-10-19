import React from 'react'
import data from './data.json'

const Products = () => {
  return (
    
    <div className="products">
        {
        data.map(p =>(
          <div className="product-card">
            <img src={p.image} alt="product"/>
            <h3>{p.title}</h3>
            <span>{p.price}$</span>
            <button className='add-to-wishlist'>Add to Wishlist</button>
            <button className='buy-now'>BUY NOW!</button>
        </div>
        ))}

    </div>

  )
}

export default Products