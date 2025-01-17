import React from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';

function SignUp() {
  
  
  return (
    <>
    <div id="sign"> 
      <div className="wrapper">
        <div className="container">
          <div className="col-left">
            <h2>Create an Account</h2>
            <p>Join us today and start enjoying all the features of our services!</p>
            <Link to="/login" className="btn">Already have an account? Log in</Link>
          </div>

          {/* Right Column with Sign-Up Form */}
          <div className="col-right">
            <form className="login-form">
              <h2>Sign Up</h2>

              <p>Enter your details to create a new account:</p>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
  
}

export default SignUp;
