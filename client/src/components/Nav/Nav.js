import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <div> 
    <nav className="nav-width">
      <div className="nav-align">
      <ul>
        <li>
        <a href="/home" className="brand-title">
          Arnab Majumdar
        </a>
        </li>
      </ul>
        
        <ul className="right">
          <li>
          <Link to="/home">Home</Link>{" "}
          </li>
          <li>
          <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
        
      </div>
    </nav>
  </div>
);

export default Nav;
