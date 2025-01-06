import React from 'react'

function Footer() {
  return (
    <div>
         {/* Enhanced Footer */}
  <footer id="contact">
    <div className="footer-container">
      <div className="footer-section about">
        <h2>About Us</h2>
        <p>
        The Integrated Home Management System (IHMS) is a web-based platform designed to provide homeowners with a convenient and 
        efficient way to manage their homes. IHMS offers a range of services, including electrical, plumbing, and waste management,
         through a network of verified professionals.
        </p>
      </div>
      <div className="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="#introduction">Home</a>
          </li>
          <li>
            <a href="#psychology">Help</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-section contact-form">
        <h2>Contact Us</h2>
        <form action="#" method="post">
          <input type="email" name="email" placeholder="Your email address" />
          <textarea
            name="message"
            rows={4}
            placeholder="Your message"
            defaultValue={""}
          />
          <button type="submit">Send</button>
        </form>
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