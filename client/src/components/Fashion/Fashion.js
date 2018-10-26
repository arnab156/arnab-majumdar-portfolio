import React from "react";
// import ReactDOM from "react-dom";
// import Coverflow from "react-coverflow";
// import { StyleRoot } from "radium";

import "./Fashion.css";

import project from "./Images/moc_2.png";
import project3 from "./Images/Project3.jpg";
import PurpleT from "./Images/Purple Line/T.jpg";
import PurpleTank from "./Images/Purple Line/Tank.jpg";
import PurpleWomens from "./Images/Purple Line/womens.jpg";
import TowerBlack1 from "./Images/Tower Black/1.jpg";
import TowerBlack2 from "./Images/Tower Black/2.jpg";
import TowerBlack3 from "./Images/Tower Black/3.jpg";
import TowerBlack4 from "./Images/Tower Black/4.jpg"
import TowerBlack5 from "./Images/Tower Black/5.jpg"
import TowerBlack6 from "./Images/Tower Black/6.jpg"
// import PurpleShorts from "./Images/Purple Line/Shorts.jpg";

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
              Co-founder - madeofchicago.com
            </span>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              MadeofChicago.com
            </span>
            <p>
              "A Chicago-Inspired, Chicago-Designed active wear fashion brand
              reinforcing what Chicago is made of: A city of skyscrapers,
              modernity, and design."
            </p>
            <h5>Roles:</h5>
            <p>
              My role included setting up the business, procure funding through
              SBA, design, product development and vendor developemnt. Besides
              these, I also shared responsibility of managing the 55" smart
              vending operations at Block37 and Landmark Century Mall, Chicago.
            </p>
          </div>
        </div>
      </div>

      <div class="col s6 m6">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light pixfix">
            <img class="activator" src={project3} alt="alt" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              Retail Experience
            </span>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Design, Product Development & Operations
            </span>
            <h2>ROLES</h2>
            <p>Co-Founder, Entrepreneur</p>
          </div>
        </div>
      </div>

      <div className="col s12 l12 movement">
        <h3 className="header center storyTitle">Purple Line</h3>
        <div className="row">
          <div className="col s4 m4">
            <div className="card">
              <div className="card-image">
                <img src={PurpleT} alt="painting1" />
                <span className="card-title">T-Shirt</span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <div className="card">
              <div className="card-image">
                <img src={PurpleTank} alt="painting1" />
                <span className="card-title">Active Tank</span>
              </div>

              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <div className="card">
              <div className="card-image">
                <img src={PurpleWomens} alt="painting1" />
                <span className="card-title">T-Shirt</span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="header center storyTitle">Tower Black</h3>
        <div className="row">
          <div className="col s4 m4">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TowerBlack1} alt="alt" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Activewear T-Shirt
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  MadeofChicago.com
                </span>
                <p>
                  "A Chicago-Inspired, Chicago-Designed active wear fashion
                  brand reinforcing what Chicago is made of: A city of
                  skyscrapers, modernity, and design."
                </p>
                <h5>Roles:</h5>
                <p>
                  My role included setting up the business, procure funding
                  through SBA, design, product development and vendor
                  developemnt. Besides these, I also shared responsibility of
                  managing the 55" smart vending operations at Block37 and
                  Landmark Century Mall, Chicago.
                </p>
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TowerBlack2} alt="alt" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Women's Active Bra
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  MadeofChicago.com
                </span>
                <p>
                  "A Chicago-Inspired, Chicago-Designed active wear fashion
                  brand reinforcing what Chicago is made of: A city of
                  skyscrapers, modernity, and design."
                </p>
                <h5>Roles:</h5>
                <p>
                  My role included setting up the business, procure funding
                  through SBA, design, product development and vendor
                  developemnt. Besides these, I also shared responsibility of
                  managing the 55" smart vending operations at Block37 and
                  Landmark Century Mall, Chicago.
                </p>
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TowerBlack3} alt="alt" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Women's Active Bra
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  MadeofChicago.com
                </span>
                <p>
                  "A Chicago-Inspired, Chicago-Designed active wear fashion
                  brand reinforcing what Chicago is made of: A city of
                  skyscrapers, modernity, and design."
                </p>
                <h5>Roles:</h5>
                <p>
                  My role included setting up the business, procure funding
                  through SBA, design, product development and vendor
                  developemnt. Besides these, I also shared responsibility of
                  managing the 55" smart vending operations at Block37 and
                  Landmark Century Mall, Chicago.
                </p>
              </div>
            </div>
          </div>

                    <div className="col s4 m4">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TowerBlack4} alt="alt" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Activewear T-Shirt
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  MadeofChicago.com
                </span>
                <p>
                  "A Chicago-Inspired, Chicago-Designed active wear fashion
                  brand reinforcing what Chicago is made of: A city of
                  skyscrapers, modernity, and design."
                </p>
                <h5>Roles:</h5>
                <p>
                  My role included setting up the business, procure funding
                  through SBA, design, product development and vendor
                  developemnt. Besides these, I also shared responsibility of
                  managing the 55" smart vending operations at Block37 and
                  Landmark Century Mall, Chicago.
                </p>
              </div>
            </div>
          </div>

                    <div className="col s4 m4">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TowerBlack5} alt="alt" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Activewear T-Shirt
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  MadeofChicago.com
                </span>
                <p>
                  "A Chicago-Inspired, Chicago-Designed active wear fashion
                  brand reinforcing what Chicago is made of: A city of
                  skyscrapers, modernity, and design."
                </p>
                <h5>Roles:</h5>
                <p>
                  My role included setting up the business, procure funding
                  through SBA, design, product development and vendor
                  developemnt. Besides these, I also shared responsibility of
                  managing the 55" smart vending operations at Block37 and
                  Landmark Century Mall, Chicago.
                </p>
              </div>
            </div>
          </div>

                    <div className="col s4 m4">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TowerBlack6} alt="alt" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Activewear T-Shirt
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  MadeofChicago.com
                </span>
                <p>
                  "A Chicago-Inspired, Chicago-Designed active wear fashion
                  brand reinforcing what Chicago is made of: A city of
                  skyscrapers, modernity, and design."
                </p>
                <h5>Roles:</h5>
                <p>
                  My role included setting up the business, procure funding
                  through SBA, design, product development and vendor
                  developemnt. Besides these, I also shared responsibility of
                  managing the 55" smart vending operations at Block37 and
                  Landmark Century Mall, Chicago.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
);

export default Fashion;
