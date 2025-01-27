import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div id='foot'>
         {/* Enhanced Footer */}
  <footer id="contact">
    <div className="footer-container">
      <div className="footer-section about">
        <h2>Mission</h2>
        <p>
        To provide homeowners with a convenient and efficient web-based platform for managing their homes. 
        The Integrated Home Management System (IHMS) connects users with a trusted network of verified professionals, 
        offering essential services such as electrical, plumbing, and waste management.
        </p>
      </div>
      <div className="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a href="#psychology">Help</a>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section social-media">
        <h2>Follow Us</h2>
        <ul className="social-icons">
          <li>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/facebook--v1.png"
                alt="Facebook"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png"
                alt="Twitter"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
                alt="Instagram"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2023 IHMS | Made for providing services</p>
    </div>
  </footer>


  

    </div>
  )
}

export default Footer