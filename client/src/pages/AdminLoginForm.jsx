import React, { useState } from "react";
import "./AdminLoginForm.css"; // CSS file for styling

const AdminLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (you can replace with more complex logic)
    if (username === "" || password === "") {
      setError("Both fields are required!");
      return;
    }

    // Example: You would handle login logic here (e.g., API call)
    if (username === "admin" && password === "admin123") {
      alert("Login Successful!");
      // Redirect or perform other actions here
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div id="admLog" className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
