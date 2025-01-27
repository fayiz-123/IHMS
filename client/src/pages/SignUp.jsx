import React from 'react'
import './SignUp.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function SignUpPage() {
  window.scrollTo(0, 0);
  
  return (
    <>
      <div id="sign-up">
        <div className="wrapper sign-up">
          <div className="container">
            <div className="col-left">
              <div className="sign-up-text">
                <h2>Create Your Account!</h2>
                <p>
                  Join us and manage your home services with ease. It's free and quick to sign up!
                  <br />
                  Already have an account? <Link to='/login' className="btn">Login</Link>
                </p>
              </div>
            </div>
            <div className="col-right">
              <div className="sign-up-form">
                <h2>Sign Up</h2>
                <form action="">
                  <p>
                    <label>
                      Full Name<span>*</span>
                    </label>
                    <input type="text" placeholder="Full Name" required="" />
                  </p>
                  <p>
                    <label>
                      Email address<span>*</span>
                    </label>
                    <input type="email" placeholder="Email" required="" />
                  </p>
                  <p>
                    <label>
                      Phone Number<span>*</span>
                    </label>
                    <input type="text" placeholder="Phone Number" required="" />
                  </p>
                  <p>
                    <label>
                      Password<span>*</span>
                    </label>
                    <input type="password" placeholder="Password" required="" />
                  </p>
                  <p>
                    <label>
                      Confirm Password<span>*</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" required="" />
                  </p>
                  <p>
                    <input type="submit" value="Sign Up" />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
