import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // For success message

  window.scrollTo(0, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setMessage(""); // Clear any previous messages
  
    try {
      const response = await axios.post("http://localhost:8000/login", formData);
  
      // Log the response data for debugging
      console.log("Server Response:", response.data);
  
      if (response.data.success) {
        // Store the authToken in localStorage
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("username", response.data.username);  // Store the token
        // Optionally, store user info if needed in future for other purposes
     
        setMessage("Login successful!"); // Set success message
        navigate("/");  // Redirect to the homepage or desired route
      } else {
        setError(response.data.message); // Display error message
      }
    } catch (err) {
      console.error("Error details:", err);  // Log the entire error object for debugging
  
      // If there's a response error, log its details
      if (err.response) {
        console.error("Error response from server:", err.response.data);
        setError(err.response.data.message || "Invalid credentials or server error");
      } else if (err.request) {
        // This means the request was made, but no response was received
        console.error("No response received:", err.request);
        setError("No response from the server, please try again.");
      } else {
        // This handles any other errors, like request setup errors
        console.error("Error message:", err.message);
        setError("Something went wrong, please try again later.");
      }
    }
  };
  
  return (
    <>
      <div id="log">
        <div className="wrapper login">
          <div className="container">
            <div className="col-left">
              <div className="login-text">
                <h2>Welcome Back !</h2>
                <p>
                  Sign in to your account and manage your home services.
                  <br />
                  Don't have an account? <br />
                  <Link to="/signup" className="btn">Sign Up</Link>
                </p>
              </div>
            </div>
            <div className="col-right">
              <div className="login-form">
                <h2>Login</h2>
                {message && <p className="success">{message}</p>} {/* Success message */}
                {error && <p className="error">{error}</p>} {/* Error message */}
                <form onSubmit={handleLogin}>
                  <p>
                    <label>Username/Email address<span></span></label>
                    <input
                      type="text"
                      placeholder="Username or Email"
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      required
                    />
                  </p>
                  <p>
                    <label>Password<span></span></label>
                    <input
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      name="password"
                      required
                    />
                  </p>
                  <p>
                    <input type="submit" value="Sign In" />
                  </p>
                  <p><a href="#">Forgot password?</a></p>
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
