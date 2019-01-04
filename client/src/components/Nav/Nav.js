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
        <Link to="/home" className="brand-title">
          Arnab Majumdar
       </Link>
      </div>
    </nav>
  </div>
);

export default Nav;
