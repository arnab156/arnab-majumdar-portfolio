import React from "react";
import './Container.css';

export const Container = ({ fluid, children }) =>
  <div className="container">
    {children}
  </div>;

  export default Container;
