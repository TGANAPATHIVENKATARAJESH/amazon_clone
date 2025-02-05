import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="./amazon_logo.png"
            alt="Amazon Clone"
            width="100"
          />
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Search Bar */}
          <form className="d-flex mx-auto" style={{ width: "50%" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
            />
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </form>

          {/* User & Cart Icons */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/login">
                <FaUser className="me-1" /> Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <FaShoppingCart className="me-1" /> Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
