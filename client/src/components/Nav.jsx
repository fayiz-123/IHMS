import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");

    if (authToken && username) {
      setUser({ username });
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    setUser(null);
    navigate("/login");
  };

  return (
    <div id="nav">
      <header>
        <nav>
          {/* Logo */}
          <div className="logo">
            <span>I H M S</span>
          </div>

          {/* Mobile Menu Button */}
          <div
            className={`menu-icon ${menuOpen ? "toggle" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="nav-icon"></div>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/myBookings" onClick={() => setMenuOpen(false)}>Bookings</Link></li>

            {user ? (
              <>
                <li className="user-name">Hello, {user.username}!</li>
                <li>
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
