import React from 'react'
import logo from './images/logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="logo"/>
            <h3>Contact US</h3>
            <p>Azerbaijan, Baku. <br/>
             H.Javid Prospect 95 <br/>
             E-Commerce Main Office</p>
             <span>+994 12 213 45 67</span>
             <div className="payment-methods">
              <a href="#"><i class="fa-brands fa-cc-visa"></i></a>
              <a href="#"><i class="fa-brands fa-cc-mastercard"></i></a>
              <a href="#"><i class="fa-brands fa-cc-paypal"></i></a>
              <a href="#"><i class="fa-brands fa-cc-discover"></i></a>
              <a href="#"><i class="fa-brands fa-cc-amazon-pay"></i></a>
             </div>
        </div>
        <div className="followus">
            <p>FOLLOW US!</p>
            <hr />
            <a href="#"><i class="fa-brands fa-facebook"></i> Facebook</a>
            <a href="#"><i class="fa-brands fa-instagram"></i> Instagram</a>
            <a href="#"><i class="fa-brands fa-twitter"></i> Twitter</a>
            <a href="#"><i class="fa-brands fa-youtube"></i> Youtube</a>
            <a href="#"><i class="fa-brands fa-google-plus-g"></i> Google+</a>

        </div>
        <div className="footer-middle">
            <p>OUR SERVICES</p>
            <hr />
            <a href="#">GET A CUPON!</a>
            <a href="#">Our Partners</a>
            <a href="#">FAQ</a>
            <a href="#">Your Profile</a>
            <a href="#">Discover!</a>

        </div>
        <div className="footer-end">
            <p>SUBSCRIBE</p>
            <hr />
            <p>Subscribe to get special offers, free giveaways,<br />
              and once-in-a-lifetime deals</p>
            <input type="text" id="subscribe-input" />
            <button type='submit' >SUBSCRIBE!</button>
        </div>

    </div>
  )
}

export default Footer