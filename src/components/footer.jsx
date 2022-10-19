import React from 'react'
import logo from './images/logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="footer-middle">
            <a href="#">GET A CUPON!</a>
            <a href="#">Our Partners</a>
            <a href="#">Be Sponsor</a>
            <a href="#">FAQ</a>
        </div>
        <div className="footer-end">
            <a href="#">Your Profile</a>
            <a href="#">Basket</a>
            <a href="#">Add Credit Card</a>
            <a href="#">Discover!</a>
        </div>
    </div>
  )
}

export default Footer