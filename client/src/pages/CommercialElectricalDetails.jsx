import React from 'react';
import './ResidentialDetails.css'; // Assuming your styles are in this file, you can rename if needed.
import { Link } from 'react-router-dom';

const CommercialElectricalDetails = () => {
  window.scrollTo(0, 0);
  return (
    <div className="service-details-container">
      <div className="service-details-header">
        <h1>Commercial Electrical Services</h1>
        <img src="/images/plumm.jpg" alt="Commercial Electrical Services" />
      </div>
      
      <div className="service-details-content">
        <h2>What We Offer</h2>
        <p>
          Our Commercial Electrical Services are designed to meet the demanding electrical needs of businesses and large-scale facilities. Whether you're running a small office or managing a large commercial property, our expert electricians can provide the necessary solutions to ensure your systems are safe, reliable, and efficient.
        </p>
        
        <h2>Our Services Include:</h2>
        <ul>
          <li>Electrical System Installation and Upgrades</li>
          <li>Lighting Design and Installation</li>
          <li>Electrical Inspections</li>
          <li>Power Distribution Systems</li>
          <li>Energy-efficient Solutions for Commercial Buildings</li>
          <li>Electrical Maintenance and Emergency Repairs</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          At IHMS, we are committed to providing high-quality electrical services that help businesses reduce downtime and improve operational efficiency. Our team of licensed electricians is equipped with the knowledge and tools to handle even the most complex electrical needs.
        </p>

        <blockquote>
          "Your trusted partner for all electrical needs in your business."
        </blockquote>

        <div className="book-now-section">
          <Link to="/book-now" className="back-button">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommercialElectricalDetails;
