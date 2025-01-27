import React from 'react';
import './Contact.css'; // Assuming you've linked the CSS file
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function Contact() {
  window.scrollTo(0, 0);

  return (
    <>
      <Nav />
      <main id="contact">
        {/* Hero Section */}
        <section id="contact-introduction" className="hero-section">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p>
              Have questions or need assistance? Feel free to reach out to us.
              Our team is here to help you with all your home management needs.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form">
          <div className="container">
            <h2>Get In Touch</h2>
            <p style={{color:'black'}}>We'd love to hear from you! Please fill out the form below.</p>
            <form className="contact-form" style={{border:'2px solid blue',padding:'50px'}}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>

        {/* Contact Info Section */}
        <section id="contact-info">
          <div className="info-container">
            <div className="info-item">
              <h3>Address</h3>
              <p style={{color:'black'}}>Companyppadi,Oppo:piller no:106,Aluva,Ernakulam,Kerala, India</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p style={{color:'black'}}>(+91) 8714585932</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p style={{color:'black'}}>support@ihms.com</p>
            </div>
          </div>
        </section>

        {/* Optional: Map Section */}
        <section id="contact-map">
          <h2>Find Us on the Map</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4224.800511157548!2d76.34022507535053!3d10.087299990022585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ec05032e0f5%3A0xc975eb4323679ba8!2sCompanypady!5e1!3m2!1sen!2sus!4v1737611316904!5m2!1sen!2sus"  loading="lazy" ></iframe>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;