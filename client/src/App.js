import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import NoMatch from "./pages/NoMatch/NoMatch";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
