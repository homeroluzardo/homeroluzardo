import React, { Component } from "react";
import LogoHomero from "../images/LogoHomero.png";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <img
              src={LogoHomero}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Logo Homero Luzardo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item active mr-3">
                <Link className="nav-link text-white" to="/">
                  <u>Home</u>
                </Link>
              </li>
              <li className="nav-item active mr-3">
                <Link className="nav-link text-white" to="/profile">
                  <u>Profile</u>
                </Link>
              </li>
              <li className="nav-item active mr-3">
                <Link className="nav-link text-white" to="/skills">
                  <u>Skills</u>
                </Link>
              </li>
              <li className="nav-item active mr-3">
                <Link className="nav-link text-white" to="/work">
                  <u>Work</u>
                </Link>
              </li>
              <li className="nav-item active mr-3">
                <Link className="nav-link text-white" to="/contact">
                  <u>Contact</u>
                </Link>
              </li>
              <li className="nav-item active mr-3">
                <div
                  className="btn-group btn-group-sm mt-1"
                  role="group"
                  aria-label="Basic example"
                >
                  {/* <button type="button" className="btn btn-dark btn-eng">
                    Eng
                  </button>
                  <button type="button" className="btn btn-dark btn-spa">
                    Esp
                  </button> */}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
