import React from "react";
import { Link } from "react-router-dom";
import "./FlipCart.css";
import profileimage from "./profilepic.jpg";
import insta from "./instagram.png";
import linkedIn from "./LinkedIn.png";
import github from "./github.png";
import touch from "./touch.png";

const FlipCart = () => (
  <div>
    <div className="flex-container1">
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <h2>About Me</h2>
            <img id="profilePic" src={profileimage} alt="profileimage" />
            <br />
            <img src={touch} alt="LinkedIn Link" className="touchIconStyle" />
          </div>
          <div className="flip-box-back">
            <h5>Web | Developer | Designer</h5>
            <div className="row">
              
              <p className="center minimize">
                Arnab is a creator, a thinker, and an ideator who complements his 
                entrepreneurial spirit with his love for coding. In his previous experience 
                in academia, fashion and retail, he excelled at problem-solving, multi-tasking, 
                and more importantly, learned valuable professional and life lessons. 
                
                Inherently a solution-oriented person, Arnab is passionate about exploring 
                more in the area of interaction between artificial intelligence and art.

                <br />
                <br />
                Gallup Strengths:{" "}
                <b> Futuristic, Ideation, Command, Intellection, Input</b>
                <ul>
                  <li> Cat Parent</li>
                  <li> Design Enthusiast</li>
                  <li> He/Him/His</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front mini2">
            <h2>Skills</h2>
            
            <ul>
              <li> HTML5/CSS3</li>
              <li> JavaScript/JQuery</li>
              <li> Bootstrap, Materialize, Bulma</li>
              <li> Nodejs, Handlebar, Express</li>
              <li> Firebase, MySQL, MongoDB</li>
              <li> React, Sequelizejs, Mongoose</li>
              <li> Trello, Github, Scrum</li>
              <li> Adobe Creative Suite </li>
              <li> Entrepreneurial, Creative </li>
              <li> Basic Python, Django, Java</li>
            </ul>

            <img src={touch} alt="LinkedIn Link" className="touchIconStyle" />
          </div>
          <div className="flip-box-back">
            <h4>Social</h4>
            <br/>
            <a
              href="https://www.linkedin.com/in/arnab156/"
              title="Go to LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="LinkedIn Link" className="thumbnail" />
            </a>

            <a
              href="https://www.instagram.com/studioarnab/"
              title="Go to instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Insta Link" className="thumbnail" />
            </a>

            <a
              href="https://github.com/arnab156/"
              title="Go to instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github Link" className="thumbnail" />
            </a>
            <br />
            <br />
            <button className="waves-effect waves-light btn-small red darken-4"> <Link to="/portfolio" className="white-text">Portfolio</Link></button>
           
            <br />
            <p>Human Languages: English, Hindi, Bangla</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FlipCart;
