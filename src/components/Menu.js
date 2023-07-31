import React, { Component } from "react";
import LogoHomero from "../images/LogoHomero.png";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curFocus: "home",
      linkClasses: {
        home: "nav-link text-white focus",
        profile: "nav-link text-white",
        skills: "nav-link text-white",
        work: "nav-link text-white",
        contact: "nav-link text-white",
      },
    };
  }

  hideNavBar() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ) {
      document.getElementsByClassName("navbar-toggler")[0].click();
    }
  }

  setModif(id, cls) {
    const element = document.getElementById(id);
    if (element) {
      element.setAttribute("className", cls);
    }
  }

  handleClick = (id) => {
    this.setModif(this.state.curFocus, "clearmodif");
    this.setState((prevState) => ({
      curFocus: id,
      linkClasses: {
        ...prevState.linkClasses,
        [prevState.curFocus]: "nav-link text-white",
        [id]: "nav-link text-white focus",
      },
    }));
    this.hideNavBar();
  };

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
            <ul className="navbar-nav menu_ppl">
              <li className="nav-item mr-3">
                <Link
                  className={this.state.linkClasses.home}
                  id="home"
                  to="/"
                  onClick={() => this.handleClick("home")}
                >
                  <u>Home</u>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className={this.state.linkClasses.profile}
                  id="profile"
                  to="/profile"
                  onClick={() => this.handleClick("profile")}
                >
                  <u>Profile</u>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className={this.state.linkClasses.skills}
                  id="skills"
                  to="/skills"
                  onClick={() => this.handleClick("skills")}
                >
                  <u>Skills</u>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className={this.state.linkClasses.work}
                  id="work"
                  to="/work"
                  onClick={() => this.handleClick("work")}
                >
                  <u>Work</u>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className={this.state.linkClasses.contact}
                  id="contact"
                  to="/contact"
                  onClick={() => this.handleClick("contact")}
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
