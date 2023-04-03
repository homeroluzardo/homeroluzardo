import React, { Component } from "react";
import CodeH from "../images/CodeH.png";
import "../styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm text-center my-auto m-3">
            <h1 className="home-title text-white title-name hello">
              <b>Hello!</b>
            </h1>

            <h1 className="home-title text-white title-name name">
              <b>
                I'm <span className="my-name">Homero Luzardo.</span>
              </b>
            </h1>

            <h3 className="home-title text-white title-name fdev">
              <b>I'm a Front-end Web Developer.</b>
            </h3>
          </div>
          <div className="col-sm text-center m-3">
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
      </div>
    );
  }
}
