import React, { Component } from "react";
import Container from "../../components/Container/Container";
import PortfolioNav from "../../components/PortfolioNav/PortfolioNav";

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
