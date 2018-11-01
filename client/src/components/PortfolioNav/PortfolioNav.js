import React from "react";
import { Link, Route} from "react-router-dom";
import "./PortfolioNav.css";
import WebProject from "../../components/WebDevelopment/WebDevelopment";
import Fashion from "../../components/Fashion/Fashion";
import Paint from "../../components/Paint/Paint";
// import Card from "../Card/card";

const PortNav = props => (
  <div>
    <div className="navbar z-depth-3 pulse">
      <Link to={`/portfolio/webdevelopment`} role="button" id="web11" className="mini4">{props.button1} </Link>{" "}
      <Link to={`/portfolio/fashion`} role="button" id="fashion11" className="mini4"> {props.button2}</Link>{" "}
      <Link to={`/portfolio/paint`} role="button" id="paint11" className="mini4"> {props.button3}</Link>{" "}
    </div>

      <Route  path={`/portfolio/webdevelopment`} component={WebProject} />
      <Route  exact path={`/portfolio/fashion`} component={Fashion} />
      <Route  exact path={`/portfolio/paint`} component={Paint} />
      
  </div>
);

export default PortNav;
