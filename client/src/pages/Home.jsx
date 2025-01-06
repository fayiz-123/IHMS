import React from 'react'
import './home.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
    <Nav/>
 

  
  <main>
    {/* Hero Section */}
    <section id="introduction" className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content container">
        <h1>Welcome to Integrated Home Management System</h1>
        <p className="subheading">
        Discover Integrated Home Management System (IHMS) is a web-based platform designed to provide homeowners with a convenient and 
        efficient way to manage their homes. IHMS offers a range of services, including electrical, plumbing, and waste management, 
        through a network of verified professionals.
        </p>
        <a href="#theory" className="btn">
          Explore More
        </a>
      </div>
    </section>
    {/* Color Theory Section */}
    <section
      id="theory"
      className="color-theory-section section-container pattern-section"
    >
      <div className="container section-flex">
        <div className="text-content">
          <h2>SERVICES </h2>
          <p>
            Color theory encompasses a multitude of definitions, concepts, and
            design applications. It is a set of guidelines used by designers to
            communicate with users through appealing color schemes in visual
            interfaces.
          </p>
        </div>
        <div className="graphic-content">
          {/* Color Wheel Canvas */}
          <canvas id="colorWheelCanvas" width={400} height={400} />
        </div>
      </div>
    </section>
    <section
      id="primary"
      className="primary-colors-section section-container pattern-section"
    >
      <div className="container">
        <h2>CHOOSE SERVICES</h2>
        <p>
          Primary colors are the foundation of the color wheel. They are colors
          that cannot be created by mixing other colors.
        </p>
        <div className="color-cards">
          <div className="color-card red">
            <h3>Red</h3>
            <p>
              Red symbolizes passion, energy, and excitement. It's a powerful
              color that can evoke strong emotions and is often used to grab
              attention.
            </p>
          </div>
          <div className="color-card blue">
            <h3>Blue</h3>
            <p>
              Blue represents stability, trust, and tranquility. It is calming
              and serene, often associated with the sky and the sea.
            </p>
          </div>
          <div className="color-card yellow">
            <h3>Yellow</h3>
            <p>
              Yellow signifies joy, intellect, and freshness. It is bright and
              uplifting, associated with sunshine and happiness.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="newsletter-section section-container pattern-section">
      <div className="container">
        <h2>Stay Updated</h2>
        <p>
          Subscribe to our newsletter to receive the latest insights on color
          theory, design trends, and exclusive resources.
        </p>
        <form className="newsletter-form" action="#" method="post">
          <input type="email" name="email" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  </main>
  <Footer/>
  
</>

  )
}

export default Home