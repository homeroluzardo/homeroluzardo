import React from "react";
import "../styles/Pages.css";

function Skills() {
  return (
    <div className="container mt-5 p-5 myContainer">
      <h2 className="subtitle">Skills</h2>

      <blockquote className="blockquote text-white">
        <p className="mb-0">HTML 5, CSS 3, JavaScript, ReactJs, Bootstrap.</p>
        <footer className="blockquote-footer text-white">2 years.</footer>
      </blockquote>

      <blockquote className="blockquote text-white">
        <p className="mb-0">ClickFunnels, Unbounce, Leadpages.</p>
        <footer className="blockquote-footer text-white">2 years.</footer>
      </blockquote>

      <blockquote className="blockquote text-white">
        <p className="mb-0">Wordpress, Elementor.</p>
        <footer className="blockquote-footer text-white">3 years.</footer>
      </blockquote>

      <blockquote className="blockquote text-white">
        <p className="mb-0">InfusionSoft, ActiveCampaign.</p>
        <footer className="blockquote-footer text-white">2 years.</footer>
      </blockquote>

      <blockquote className="blockquote text-white">
        <p className="mb-0">Final Cut Pro, Screenflow 8, iMovie.</p>
        <footer className="blockquote-footer text-white">3 years.</footer>
      </blockquote>
    </div>
  );
}

export default Skills;
