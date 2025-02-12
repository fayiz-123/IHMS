import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve username and token from localStorage
    const authToken = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");

    // If both authToken and username exist, set the user
    if (authToken && username) {
      setUser({ username }); // Directly set the username from localStorage
    } else {
      setUser(null); // No user logged in
    }
  }, []); // Runs once when the component mounts

  const handleLogout = () => {
    // Remove authToken and username from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    setUser(null); // Reset the user state
    navigate("/"); // Redirect to homepage or login page
  };

  return (
    <div id="nav">
      <header>
        <nav>
          <div className="logo">
            <span>I H M S</span>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/myBookings">Bookings</Link></li>

            {user ? (
              <>
                <li className="user-name">Hello, {user.username}!</li> {/* Display username */}
                <li>
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
