import React from 'react';
import { Link } from 'react-router-dom';
import './ResidentialDetails.css'

const ResidentialDetails = () => {
  return (
    <div className="service-details-container">
      <div className="service-details-header">
        <h1>Residential Electrical Services</h1>
        <img src="/images/plumm.jpg" alt="Residential Electrical Services" className="service-details-image" />
      </div>
      <div className="service-details-content">
        <h2>Service Overview</h2>
        <p>
          At IHMS, we provide comprehensive electrical repair and installation for your home. Whether it’s fixing a broken electrical system, upgrading your lighting, or installing a new electrical panel, our skilled electricians ensure your home’s electrical systems are safe, reliable, and efficient.
        </p>

        <h2>Key Benefits</h2>
        <ul>
          <li>Fast and efficient electrical repairs</li>
          <li>Upgrading outdated electrical systems for increased safety</li>
          <li>Professional installations with high-quality materials</li>
          <li>Licensed and experienced electricians</li>
          <li>Affordable pricing with no hidden charges</li>
        </ul>

        <h2>Services Included</h2>
        <ul>
          <li>Electrical system inspection and safety checks</li>
          <li>Lighting installations (indoor & outdoor)</li>
          <li>Electrical panel upgrades</li>
          <li>Whole-house rewiring</li>
          <li>Smart home electrical solutions</li>
          <li>Electrical outlet installation and repair</li>
          <li>Surge protection installation</li>
        </ul>

        <h2>Our Process</h2>
        <p>
          We follow a streamlined process to ensure that your residential electrical needs are met with efficiency and professionalism:
        </p>
        <ol>
          <li><strong>Consultation:</strong> We discuss your needs and conduct a thorough assessment.</li>
          <li><strong>Evaluation:</strong> Our experts evaluate your electrical system for safety and performance.</li>
          <li><strong>Installation/Repair:</strong> We proceed with the necessary repairs or installations, ensuring top-quality service.</li>
          <li><strong>Post-Completion Check:</strong> We test and inspect the work to ensure everything is functioning perfectly.</li>
        </ol>

        <h2>Customer Testimonials</h2>
        <blockquote>
          "IHMS did an amazing job fixing our lighting system. They were on time, professional, and the quality of work was outstanding!" - <em>John D.</em>
        </blockquote>
        <blockquote>
          "Our home's electrical system was outdated, and IHMS upgraded it efficiently without any hassle. Highly recommend!" - <em>Sarah M.</em>
        </blockquote>

        <h2>Special Offer: 10% Off for First-Time Customers</h2>
        <p>
          Book our Residential Electrical Services today and receive a 10% discount on your first service. Contact us now to schedule an appointment!
        </p>
      </div>

      <Link to="" className="back-button">Book now</Link>
    </div>
  );
};

export default ResidentialDetails;
