import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
const today = new Date();
const year = today.getFullYear();

export default class Footer extends Component {
  render() {
    return (
      <div className="content-wrap-menu">
        <footer className="footer pt-3 pb-3">
          <div className="container-fluid">
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/homeroluzardo"
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in mr-3 ml-3"></i>
              </a>
              <a
                href="https://www.instagram.com/homeroluzardo"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram mr-3 ml-3"></i>
              </a>
              <a
                href="https://www.facebook.com/homero.luzardo"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f mr-3 ml-3"></i>
              </a>
              <a
                href="https://twitter.com/homeroluzardo"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter mr-3 ml-3"></i>
              </a>
              <a
                href="https://github.com/homeroluzardo"
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github mr-3 ml-3"></i>
              </a>
              {/*} <a
                href="mailto:homeroluzardo@icloud.com?subject=Have%20a%20question%20or%20want%20to%20work%20together?&body=Hello..."
                title="Message me!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope mr-3 ml-3"></i>
    </a>*/}

              <Link to="/contact" title="Message me!">
                <i className="fas fa-envelope mr-3 ml-3"></i>
              </Link>
            </div>
            <p className="text-center text-muted mb-0 copyright">
              <small>
                Copyright © {year} Homero Luzardo. All rights reserved.
              </small>
            </p>
            <p className="text-center text-muted mb-0 copyright">
              <small>
                <em>This Website was built using React.</em>
              </small>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
