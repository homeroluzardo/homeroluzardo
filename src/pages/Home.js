import React, { Component } from "react";
import { Link } from "react-router-dom";
import CodeH from "../images/CodeH.png";
import "../styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm text-center my-auto m-3">
            <h1 className="home-title text-white title-name hello">
              <b>Hi there, I'm</b>
            </h1>

            <h1 className="home-title text-white title-name name">
              <b>
                <span className="my-name">Homero Luzardo.</span>
              </b>
            </h1>

            <h3 className="home-title text-white title-name fdev">
              <b>I am a Front-end Web Developer.</b>
            </h3>
            <p className="home_paragraph">
              I have the potential to help businesses achieve their goals by
              creating custom web solutions that meet their specific needs. I
              can help you to reach a wider audience and generate more leads and
              sales through funnels.
            </p>
            <p className="home_paragraph">
              <b>
                <i>Succeed in today's digital landscape.</i>
              </b>
            </p>
          </div>

          <div className="col-sm text-center m-3">
            <div className="container mobile">
              <div className="row">
                <div className="col text-center">
                  <Link to="/contact">
                    <button className="btn btn-dark">Reach Out To Me</button>
                  </Link>
                </div>
              </div>
            </div>

            <img
              src={CodeH}
              width="450"
              height="450"
              className="rounded mx-auto d-block img-fluid img-h"
              alt="Logo with Code"
            />
          </div>
          <div className="col-sm text-center my-auto m-3">
            <h4 className="home-title text-white title-think">
              Think smart and make it simple! Turn your{" "}
              <span className="think_underline">ideas</span> into&nbsp;
              <span className="think_underline">reality</span>.
            </h4>
          </div>
        </div>

        <div className="container desktop">
          <div className="row">
            <div className="col text-center">
              <Link to="/contact">
                <button className="btn btn-dark">Reach Out To Me</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
