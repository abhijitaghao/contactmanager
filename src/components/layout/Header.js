import React from "react";
import { Link } from "react-router-dom";

const Header = prop => {
  const { heading } = prop;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {heading}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="fas fa-home nav-link">
                {" "}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="fas fa-plus nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="fas fa-question nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
