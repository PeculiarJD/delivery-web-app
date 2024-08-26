import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <p className='logo'>FoodHub</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magnam? Facere doloribus officia hic labore odio quo nesciunt sit optio.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-234-567-89</li>
                        <li>food-hub@gmail.com</li>
                    </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © FoodHub.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
