import React from 'react'
import './UserDash.css'

function UserDash() {
  return (
    <div>
        <div className="container">
  {/* Sidebar Navigation */}
  <aside className="sidebar">
    <h2>User Panel</h2>
    <ul>
      <li>
        <a href="#">Dashboard</a>
      </li>
      <li>
        <a href="#">Profile</a>
      </li>
      <li>
        <a href="#">Messages</a>
      </li>
      <li>
        <a href="#">Settings</a>
      </li>
      <li>
        <a href="#">Logout</a>
      </li>
    </ul>
  </aside>
  {/* Main Content Area */}
  <div className="main-content">
    {/* Header with User Info */}
    <div className="header">
      <h1>Welcome Back!</h1>
      <div className="user-info">
        <img src="https://via.placeholder.com/40" alt="User Avatar" />
        <span>John Doe</span>
      </div>
    </div>
    {/* Dashboard Cards */}
    <div className="cards">
      <div className="card">
        <h3>My Points</h3>
        <p>1,200</p>
      </div>
      <div className="card">
        <h3>Recent Orders</h3>
        <p>5 Pending</p>
      </div>
      <div className="card">
        <h3>Wishlist</h3>
        <p>12 Items</p>
      </div>
    </div>
    {/* Notifications */}
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        <li>Your order #1234 has been shipped.</li>
        <li>Profile updated successfully.</li>
        <li>New message received from support.</li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default UserDash