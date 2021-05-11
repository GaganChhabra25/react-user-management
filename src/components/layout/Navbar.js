import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className={classes.container}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" exact aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink to="/add-user" className="btn btn-outline-light">
              Add user
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
