import React, { Component } from "react";
import Container from "../../components/Container/Container";
import FlipCart from "../../components/FlipCart/FlipCart";
import Card from "../../components/Card/card";
import { Link, Route } from "react-router-dom";
import Contact from "../Contact/Contact";

class Search extends Component {
  render() {
    return (
      <Container>
        {/* <Card> */}
        <br/> <br/>
          <FlipCart />
        {/* </Card> */}

        <Card title="Email & Resume">
          <Link
            to={`/home/contact`}
            role="button"
            className="btn btn-red-color"
          >
            See More
          </Link>{" "}
          <Link
            to="/home"
            role="button"
            className="waves-effect waves-teal btn-flat"
          >
            Less
          </Link>
          <Route exact path={`/home/contact`} component={Contact} />
        </Card>








      </Container>
    );
  }
}

export default Search;
