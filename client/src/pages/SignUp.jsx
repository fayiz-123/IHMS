import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css"; // Ensure this file exists and styles the page
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");  // For error messages
  const [success, setSuccess] = useState("");  // For success messages
  const navigate = useNavigate();

  window.scrollTo(0, 0);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages
  
    // Check if the passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    const requestData = { username, email, phone, password };
    console.log("Sending data to backend:", requestData);
  
    try {
      const response = await axios.post("http://localhost:8000/signup", requestData);
      console.log("Response from backend:", response);  // Log the full response
  
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.savedUser)); // Assuming savedUser is what you want to store
        localStorage.setItem("token", response.data.token); // Store token if needed
        setSuccess(response.data.message);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        console.log("Error message from backend:", response.data.message);
        setError(response.data.message || "An unknown error occurred.");
      }
    } catch (err) {
      console.error("Error during signup:", err);
      // Check if the error is coming from network failure or if it's a backend error
      if (err.response) {
        console.error("Error response:", err.response.data);
        setError(err.response.data.message || "Signup failed. Please try again.");
      } else if (err.request) {
        console.error("No response received:", err.request);
        setError("No response from server, please try again.");
      } else {
        console.error("Error message:", err.message);
        setError("Signup failed. Please try again.");
      }
    }
  };
  
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
                  Already have an account? <Link to="/login" className="btn">Login</Link>
                </p>
              </div>
            </div>
            <div className="col-right">
              <div className="sign-up-form">
                <h2>Sign Up</h2>
                {/* Display success message */}
                {success && <p className="success">{success}</p>}
                {/* Display error message */}
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSignup}>
                  <p>
                    <label>Full Name<span>*</span></label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </p>
                  <p>
                    <label>Email address<span>*</span></label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </p>
                  <p>
                    <label>Phone Number<span>*</span></label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </p>
                  <p>
                    <label>Password<span>*</span></label>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </p>
                  <p>
                    <label>Confirm Password<span>*</span></label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
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

export default SignUp;
