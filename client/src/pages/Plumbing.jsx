import React from "react";
import "./Plumbing.css"; // Assume your shared CSS is included here
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import {Link} from 'react-router-dom'

const Plumbing = () => {
  window.scrollTo(0, 0);

  const plumbingServices = [
    {
      id: "P001",
      title: "Residential Plumbing Services",
      description: "Expert plumbing services for homes, including repairs and installations.",
      price: "₹1200",
      image: "/images/Plumb.jpg", // Replace with actual plumbing image
    },
    {
      id: "P002",
      title: "Commercial Plumbing Services",
      description: "Plumbing solutions for businesses and commercial properties.",
      price: "₹2500",
      image: "/images/Plumb.jpg", // Replace with actual plumbing image
    },
    {
      id: "P003",
      title: "Emergency Plumbing Services",
      description: "24/7 plumbing services to fix urgent water and pipe issues.",
      price: "₹3000",
      image: "/images/Plumb.jpg", // Replace with actual plumbing image
    },
  ];

  return (
    <>
      <Nav />
      <div id="plumbing">
        <div id="home" className="plumbing-services pattern-section">
          <div className="hero-section">
            <div className="hero-content">
              <h1>Our Plumbing Services</h1>
              <p className="subheading">
                At IHMS, we offer a variety of professional plumbing services for both residential and commercial properties. 
                Whether you're looking for reliable home plumbing solutions, commercial plumbing systems, or emergency plumbing 
                services, our experienced team is here to meet all your plumbing needs efficiently.
              </p>
            </div>
          </div>

          <div className="services-container section-flex">
            {plumbingServices.map((service) => (
              <div key={service.id} className="color-card blue">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p>
                    <strong>Price:</strong> {service.price}
                  </p>
                  <button className="animated-button">
                    <span className="text">Learn More</span>
                    <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
           {/* Book Now Button */}
           <div className="book-now-section">
            <Link to="/book-now" className="book-now-button">
              Book Now
            </Link>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plumbing;
