import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <div>
    <nav className="nav-width">
      <div className="right">
        <ul>
          <li>
            <Link to="/home">Home</Link>{" "}
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>

      <div className="titleDivStyle">
        <a href="/home" className="brand-title">
          Arnab Majumdar
        </a>
      </div>
    </nav>
  </div>
);

export default Nav;
