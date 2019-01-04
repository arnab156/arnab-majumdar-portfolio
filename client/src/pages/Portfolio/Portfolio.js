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

      </Container>
    );
  }
}

export default Portfolio;
