import React from "react";
import "./Fashion.css";
import project from "./Images/moc_1.png";
import project2 from "./Images/moc_2.png";

export const Fashion = () => (
  <div>
    <div class="row">
      <div class="col s6 m6">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light pixfix">
            <img class="activator" src={project} alt="alt" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              Card Title
            </span>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">MMMMM</span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>

      <div class="col s6 m6">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light pixfix">
            <img class="activator" src={project2} alt="alt" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              Card Title
            </span>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">MMMMM</span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Fashion;
