import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div>
          <header>
    <nav>
      <div className="logo">
        <span>I H M S</span>
      </div>
      <div
        className="menu-icon"
        id="menu-icon"
        aria-label="Toggle navigation menu"
        role="button"
        tabIndex={0}
      >
        <span className="nav-icon" />
      </div>
      <ul className="nav-links" id="nav-links">
        <li>
          <a href="#introduction">Home</a>
        </li>
       
        <li>
          <a href="#mixer">About</a>
        </li>
        <li>
          <a href="#psychology">Contact</a>
        </li>
        <li>
          <a href="#contact">Login</a>
        </li>
      </ul>
    </nav>
  </header>
    </div>
  )
}

export default Nav