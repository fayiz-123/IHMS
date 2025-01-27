import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div id='nav'>
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
          <Link to='/'>Home</Link>
        </li>
       
        <li>
         <Link to='/about'> About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  </header>
    </div>
  )
}

export default Nav