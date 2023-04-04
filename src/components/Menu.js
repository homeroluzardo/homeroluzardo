import React, { Component } from "react";
import LogoHomero from "../images/LogoHomero.png";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  hideNavBar() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ) {
      document.getElementsByClassName("navbar-toggler")[0].click();
    }
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/homeroluzardo">
            <img
              src={LogoHomero}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Logo Homero Luzardo"
            />
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item active mr-3">
                <Link
                  className="nav-link text-white"
                  to="/homeroluzardo"
                  onClick={this.hideNavBar}
                >
                  <u>Home</u>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className="nav-link text-white"
                  to="/profile"
                  onClick={this.hideNavBar}
                >
                  <u>Profile</u>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className="nav-link text-white"
                  to="/skills"
                  onClick={this.hideNavBar}
                >
                  <u>Skills</u>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className="nav-link text-white"
                  to="/work"
                  onClick={this.hideNavBar}
                >
                  <u>Work</u>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className="nav-link text-white"
                  to="/contact"
                  onClick={this.hideNavBar}
                >
                  <u>Contact</u>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
