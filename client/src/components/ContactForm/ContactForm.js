import React from "react";
import "./contact.css";
import Resume from "../ContactForm/Resume-Arnab.pdf"
import { Link } from "react-router-dom";

class NameForm extends React.Component {
  render() {
    return (

    <div className="row">
    <div className="col s12 m10">
      <div className="card  darken-1">
        <div className="card-content">
          <span className="card-title titleText">Email & Resume</span>
          <p className="customText">Please email me for any questions or opportunities that you have or you may also download a copy of my resume.
            <p className="hider">  To view my portfolio please click on the the portfolio tab below or on the top-right of the screen.</p>
          </p>
          
        </div>
        <div className="card-action ">
          <a className = "black-text" href="mailto:arnab@vendMyT.com<Arnab Majumdar>">Email me</a>
          <a className = "black-text" href={Resume} download>Download Resume</a>
          <Link className = "black-text hider" to="/portfolio">Portfolio</Link>
        </div>
      </div>
    </div>
  </div>

    );
  }
}

export default NameForm;
