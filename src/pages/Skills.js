import React from "react";
import "../styles/Pages.css";

import html5 from "../images/html5.png";
import css3 from "../images/css3.png";
import imgjavascript from "../images/javascript.png";
import imgreact from "../images/react.png";
import nodejs from "../images/nodejs.png";
import imgjquery from "../images/jquery.png";
import npm from "../images/npm.png";
import bootstrap from "../images/bootstrap.png";
import sass from "../images/sass.png";
import git from "../images/visual-studio-team-services-git-repository.png";
import github from "../images/github.png";
import clickfunnels from "../images/clickfunnels.png";
import unbounce from "../images/unbounce.png";
import leadpages from "../images/leadpages.png";
import kajabi from "../images/kajabi.png";
import wordpress from "../images/wordpress-blue.png";
import elementor from "../images/elementor.png";
import hubspot from "../images/hubspot.png";
import activecampaign from "../images/activecampaing.png";
import keap from "../images/keap.png";
import mailchimp from "../images/mailchimp.png";
import finalcut from "../images/finalcut.png";
import screenflow from "../images/screenflow.png";
import imovie from "../images/imovie.png";

function Skills() {
  return (
    <>
      <div className="container mt-5 p-5 myContainer">
        <h2 className="subtitle">Skills</h2>

        <blockquote className="blockquote text-white">
          <p className="mb-0">
            HTML 5, CSS 3, JavaScript, React, Node JS, JQuery, Npm, Bootstrap,
            Sass, Git, Github.
          </p>
          <footer className="blockquote-footer text-white">
            3 years of experience.
          </footer>
        </blockquote>

        <div className="skillset even">
          <div>
            <div>
              <img src={html5} alt="logo html" />
              <span className="tooltip">HTML</span>
            </div>

            <div>
              <img src={css3} alt="logo css" />
              <span className="tooltip">CSS</span>
            </div>

            <div>
              <img src={imgjavascript} alt="logo javascript" />
              <span className="tooltip">JavaScript</span>
            </div>

            <div>
              <img src={imgreact} alt="logo react" />
              <span className="tooltip">React</span>
            </div>

            <div>
              <img src={nodejs} alt="logo nodejs" />
              <span className="tooltip">Node JS</span>
            </div>

            <div>
              <img src={imgjquery} alt="logo jquery" />
              <span className="tooltip">JQuery</span>
            </div>

            <div>
              <img src={npm} alt="logo npm" />
              <span className="tooltip">NPM</span>
            </div>

            <div>
              <img src={bootstrap} alt="logo bootstrap" />
              <span className="tooltip">Bootstrap</span>
            </div>

            <div>
              <img src={sass} alt="logo sass" />
              <span className="tooltip">Sass</span>
            </div>

            <div>
              <img src={git} alt="logo git" />
              <span className="tooltip">Git</span>
            </div>

            <div>
              <img src={github} alt="logo github" />
              <span className="tooltip">GitHub</span>
            </div>
          </div>
        </div>

        <blockquote className="blockquote text-white">
          <p className="mb-0 marg_top8">
            ClickFunnels, Unbounce, Leadpages, Kajabi.
          </p>
          <footer className="blockquote-footer text-white">
            3 years of experience.
          </footer>
        </blockquote>

        <div className="skillset even">
          <div>
            <div>
              <img src={clickfunnels} alt="logo clickfunnels" />
              <span className="tooltip">ClickFunnels</span>
            </div>

            <div>
              <img src={unbounce} alt="logo unbounce" />
              <span className="tooltip">Unbounce</span>
            </div>

            <div>
              <img src={leadpages} alt="logo leadpages" />
              <span className="tooltip">Leadpages</span>
            </div>

            <div>
              <img src={kajabi} alt="logo kajabi" />
              <span className="tooltip">Kajabi</span>
            </div>
          </div>
        </div>

        <blockquote className="blockquote text-white">
          <p className="mb-0 marg_top8">Wordpress, Elementor.</p>
          <footer className="blockquote-footer text-white">
            3 years of experience.
          </footer>
        </blockquote>

        <div className="skillset even">
          <div>
            <div>
              <img src={wordpress} alt="logo wordpress" />
              <span className="tooltip">Wordpress</span>
            </div>

            <div>
              <img src={elementor} alt="logo elementor" />
              <span className="tooltip">Elementor</span>
            </div>
          </div>
        </div>

        <blockquote className="blockquote text-white">
          <p className="mb-0 marg_top8">
            Hubspot, ActiveCampaign, Keap, Mailchimp.
          </p>
          <footer className="blockquote-footer text-white">
            3 years of experience.
          </footer>
        </blockquote>

        <div className="skillset even">
          <div>
            <div>
              <img src={hubspot} alt="logo hubspot" />
              <span className="tooltip">Hubspot</span>
            </div>

            <div>
              <img src={activecampaign} alt="logo activecampaign" />
              <span className="tooltip">ActiveCampaign</span>
            </div>

            <div>
              <img src={keap} alt="logo keap" />
              <span className="tooltip">Keap</span>
            </div>

            <div>
              <img src={mailchimp} alt="logo mailchimp" />
              <span className="tooltip">Mailchimp</span>
            </div>
          </div>
        </div>

        <blockquote className="blockquote text-white">
          <p className="mb-0 marg_top8">Final Cut Pro, Screenflow 8, iMovie.</p>
          <footer className="blockquote-footer text-white">
            3 years of experience.
          </footer>
        </blockquote>

        <div className="skillset even">
          <div>
            <div>
              <img src={finalcut} alt="logo final cut pro" />
              <span className="tooltip">Final Cut Pro</span>
            </div>

            <div>
              <img src={screenflow} alt="logo screenflow" />
              <span className="tooltip">Screenflow</span>
            </div>

            <div>
              <img src={imovie} alt="logo imovie" />
              <span className="tooltip">iMovie</span>
            </div>
          </div>
        </div>

        <div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Skills;
