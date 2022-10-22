import React from 'react'
import logo from './images/logo.png'

const Search = () => {
  return (
    <div className="search">
        <div className="logo">
        <img src={logo} width="70px" alt="react" />
        </div>
        <div className="search-input">
            <input type="text" id="search-input" placeholder='products, categories or any'/>
            <button type='submit'>Search</button>
        </div>
        <div className="search-icons">
            <a href="#"><i class="fa-solid fa-heart"></i></a>
            <a href="#"><i class="fa-solid fa-basket-shopping"></i></a>
            <a href="#"><i class="fa-sharp fa-solid fa-right-to-bracket"></i></a>
        </div>
    </div>
  )
}

export default Search