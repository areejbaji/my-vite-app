
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from "./assets/logo.jpg";


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
       
      <div className="nav-logo">
        <img src={logo} alt="StyleHub Logo" />
        <h1>StyleHub</h1>
      </div>

        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/Men">Men</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/auth">Login / Signup</Link></li>
        </ul>

        <div className="nav-icons">
          <input type="text" className="search-bar" placeholder="Search..." />
          <FaShoppingCart className="icon" />
          <FaUserCircle className="icon" onClick={() => setSidebarOpen(true)} />
        </div>
      </nav>

      {/* Sidebar menu */}
      {sidebarOpen && (
        <div className="sidebar">
          <FaTimes className="close-icon" onClick={() => setSidebarOpen(false)} />
          <h3>Profile Menu</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/orders">Order History</Link></li>
            <li><button className="dark-mode-btn">Dark Mode</button></li>
            <li><button className="logout-btn">Logout</button></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;