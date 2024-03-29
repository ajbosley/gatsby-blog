import React, { Component } from "react";
const github = require("../../content/assets/github.svg");
const es6 = require("../../content/assets/es6.svg");
const react = require("../../content/assets/react.svg");
const angular = require("../../content/assets/angular.svg");
const nodejs = require("../../content/assets/nodejs.svg");
const mongo = require("../../content/assets/mongo.svg");
const css3 = require("../../content/assets/css3.svg");
const aws = require("../../content/assets/aws.svg");
const gatsby = require("../../content/assets/gatsby.svg");
const html5 = require("../../content/assets/html5.svg");
const lb = require("../../content/assets/loopback.svg");
const bluemix = require("../../content/assets/bluemix.svg");
const sentry = require("../../content/assets/sentry.svg");
const material = require("../../content/assets/material.svg");
const mapbox = require("../../content/assets/mapbox.svg");

export default class CodeImages extends Component {
  render() {
    return (
      <div className="code-image-container">
        <div className="code-image">
          <img src={github} alt="github icon" />
        </div>
        <div className="code-image">
          <img src={angular} alt="angular icon" />
        </div>
        <div className="code-image">
          <img src={nodejs} alt="nodejs icon" />
        </div>
        <div className="code-image">
          <img src={mongo} alt="mongo icon" />
        </div>
        <div className="code-image">
          <img src={react} alt="react icon" />
        </div>
        <div className="code-image">
          <img src={gatsby} alt="gatsby icon" />
        </div>
        <div className="code-image">
          <img src={html5} alt="html5 icon" />
        </div>
        <div className="code-image">
          <img src={es6} alt="es6 icon" />
        </div>
        <div className="code-image">
          <img src={css3} alt="css3 icon" />
        </div>
        <div className="code-image">
          <img src={aws} alt="aws icon" />
        </div>
        <div className="code-image">
          <img src={lb} alt="loopback icon" />
        </div>
        <div className="code-image">
          <img src={sentry} alt="Sentry.io icon" />
        </div>
        <div className="code-image">
          <img src={bluemix} alt="IBM bluemix icon" />
        </div>
        <div className="code-image">
          <img src={mapbox} alt="Mapbox icon" />
        </div>
        <div className="code-image">
          <img src={material} alt="Material icon" />
        </div>
      </div>
    );
  }
}
