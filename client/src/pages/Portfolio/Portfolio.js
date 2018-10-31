import React, { Component } from "react";
import Container from "../../components/Container/Container";
// import Card from "../../components/Card/card";
import PortfolioNav from "../../components/PortfolioNav/PortfolioNav";
// import { Link, Route } from "react-router-dom";
// import Contact from "../Contact/Contact";

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <PortfolioNav button1="Web" button2="Fashion" button3="Paint" />

        {/* <Card title="Contact">
          <Link to="/portfolio/contact" role="button" className="btn btn-red-color">
          See More
          </Link>{" "}
          <Link
            to="/portfolio" role="button" className="waves-effect waves-teal btn-flat">
            Less
          </Link>
        
          <Route exact path="/portfolio/contact" component={Contact} />
        </Card> */}
      </Container>
    );
  }
}

export default Portfolio;
