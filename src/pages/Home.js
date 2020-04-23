import React, { Component } from "react";
import CodeH from "../images/CodeH.png";
import "../styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm text-center my-auto m-3">
            <h2 className="home-title text-white title-name">
              <b>
                Hello, I'm <span className="my-name">HOMERO LUZARDO</span>. I'm
                a front-end web developer.
              </b>
            </h2>
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
            <h5 className="home-title text-white title-think">
              Think smart and make it simple!
              <br />
              Turn your ideas into reality.
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
