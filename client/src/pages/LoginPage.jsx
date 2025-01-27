import React from 'react'
import './LoginPage.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function LoginPage() {
  window.scrollTo(0, 0);
  
  return (
    <>
      <div id="log">
        <div className="wrapper login">
          <div className="container">
            <div className="col-left">
              <div className="login-text">
                <h2>Welcome Back!</h2>
                <p>
                  Sign in to your account and manage your home services.
                  <br />
                  Don't have an account? <Link to='/signup' className="btn">Sign Up</Link>
                </p>
              </div>
            </div>
            <div className="col-right">
              <div className="login-form">
                <h2>Login</h2>
                <form action="">
                  <p>
                    <label>
                      Username/Email address<span>*</span>
                    </label>
                    <input type="text" placeholder="Username or Email" required="" />
                  </p>
                  <p>
                    <label>
                      Password<span>*</span>
                    </label>
                    <input type="password" placeholder="Password" required="" />
                  </p>
                  <p>
                    <input type="submit" value="Sign In" />
                  </p>
                  <p>
                    <a href="#">Forgot password?</a>
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

export default LoginPage;
