import React from "react";
import "../styles/Pages.css";

function Work() {
  return (
    <div className="container mt-5 p-5 myContainer">
      <h2 className="subtitle">Work</h2>

      <blockquote className="blockquote text-white">
        <p className="mb-0">
          4Geeks Academy, Internship. Miami - October 2019 to Present.
        </p>
        <footer className="blockquote-footer text-white">
          Testing Javascript exercises with students at the Academy.
        </footer>
      </blockquote>

      <blockquote className="blockquote text-white">
        <p className="mb-0">Convierte Más. Miami - April 2019 to Present.</p>
        <footer className="blockquote-footer text-white">
          Marketing Funnel Creator. (Using HTML, CSS, Javascript, Bootstrap,
          Elementor).
        </footer>
        <footer className="blockquote-footer text-white">
          Video Editing (Screenflow, iMovie, Final Cut Pro).
        </footer>
        <footer className="blockquote-footer text-white">
          Email Marketing (InfusionSoft, Active Campaign).
        </footer>
      </blockquote>

      <blockquote className="blockquote text-white">
        <p className="mb-0">
          The Montiel Organization. Miami - January 2017 to March 2019.
        </p>
        <footer className="blockquote-footer text-white">
          Video Editing (Screenflow, iMovie, Final Cut Pro).
        </footer>
        <footer className="blockquote-footer text-white">
          Email Marketing (InfusionSoft, Active Campaign).
        </footer>
        <footer className="blockquote-footer text-white">
          Development and maintenance of Web pages (Wordpress, Html 5, Css3,
          JavaScript).
        </footer>
        <footer className="blockquote-footer text-white">
          Performed upgrades and installed updates. Assisted office staff with
          computer application questions. Conducted computer technology training
          with all new staff.
        </footer>
      </blockquote>
    </div>
  );
}

export default Work;
