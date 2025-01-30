import React from "react";
import "./WasteManagement.css"; // Include the CSS above
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import {Link} from 'react-router-dom'

const WasteManagement = () => {
  window.scrollTo(0, 0);

  const wasteServices = [
    {
      id: "W001",
      title: "Residential Waste Collection",
      description: "Efficient waste collection and disposal services for your home.",
      price: "₹1000",
      image: "/images/wastee.jpg",
    },
    {
      id: "W002",
      title: "Commercial Waste Management",
      description: "Tailored waste solutions for businesses and offices.",
      price: "₹2000",
      image: "/images/wastee.jpg",
    },
    {
      id: "W003",
      title: "Eco-Friendly Disposal Services",
      description: "Sustainable waste disposal solutions to protect the environment.",
      price: "₹3000",
      image: "/images/wastee.jpg",
    },
  ];

  return (
    <>
      <Nav />
      <div id="waste-management">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Our Waste Management Services</h1>
            <p className="subheading">
              We offer a range of waste management services designed to keep your home and business clean and environmentally-friendly. From residential to commercial waste solutions, we ensure proper disposal and recycling to protect the environment.
            </p>
          </div>
        </div>
        <div className="services-container">
          {wasteServices.map((service) => (
            <div key={service.id} className="color-card">
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
        
      </div>
      <Footer />
    </>
  );
};

export default WasteManagement;
