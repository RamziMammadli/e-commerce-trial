import React from 'react'
import products from './products.json'

const Product = () => {
  return (
    products.map(p=>(
        <div className="products">
            <div className="product-card">
               <img src={p.image} alt="product"/>
               <h3>{p.title}</h3>
               <span>{p.price}$</span>
               <button className='add-to-wishlist'>Add to Wishlist</button>
               <button className='buy-now'>BUY NOW!</button>
            </div>
        </div>
    ))
  )
}

export default Product