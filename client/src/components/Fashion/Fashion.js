import React from "react";
import "./Fashion.css";

import project from "./Images/moc_2.png";
import project3 from "./Images/Project3.jpg";
import PurpleT from "./Images/Purple Line/T.jpg";
import PurpleTank from "./Images/Purple Line/Tank.jpg";
import PurpleWomens from "./Images/Purple Line/womens.jpg";
import TowerBlack1 from "./Images/Tower Black/1.jpg";
import TowerBlack2 from "./Images/Tower Black/2.jpg";
import TowerBlack3 from "./Images/Tower Black/3.jpg";
import TowerBlack4 from "./Images/Tower Black/4.jpg";
import TowerBlack5 from "./Images/Tower Black/5.jpg";
import TowerBlack6 from "./Images/Tower Black/6.jpg";
// import PurpleShorts from "./Images/Purple Line/Shorts.jpg";
import ATT from "./Images/att.png";
import SAMSUNG from "./Images/Samsung.png";
import ATT2 from "./Images/att1.jpg";

import EOI1 from "./Images/EOI/1.jpg";
import EOI2 from "./Images/EOI/2.jpg";
import EOI3 from "./Images/EOI/3.jpg";
// import EOI4 from "./Images/EOI/6.jpg";
import EOI5 from "./Images/EOI/7.jpg";
import EOI6 from "./Images/EOI/8.jpg";

const pStyle = {
  color: "rgb(133, 47, 214)"
};

const aStyle = {
  width: "100%"
};

export const Fashion = () => (
  <div>
    <div className="row">
      <div className="col s6 m6 movement">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light pixfix">
            <img className="activator" src={project} alt="alt" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Co-founder - madeofchicago.com
            </span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
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

      <div className="col s6 m6 movement">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light pixfix">
            <img className="activator" src={project3} alt="alt" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Hi-Tech Retail Experience
            </span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Design, Product Development & Operations
            </span>
            <h2>Project highlights:</h2>
            <p>SBA link</p>
          </div>
        </div>
      </div>

      <div className="col s12 l12 movement">
        <h3 className="header center storyTitle" style={pStyle}>
          {" "}
          Purple Line
        </h3>
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
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={TowerBlack1} alt="alt" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Activewear T-Shirt
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
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
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={TowerBlack2} alt="alt" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Women's Active Bra
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
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
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={TowerBlack3} alt="alt" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Women's Active Bra
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
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
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={TowerBlack4} alt="alt" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Activewear T-Shirt
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  MadeofChicago.com
                </span>
                <p>
                  "A Chicago-Inspired, Chicago-Designed active wear fashion
                  brand reinforcing what Chicago is made of: A city of
                  skyscrapers, cmodernity, and design."
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
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={TowerBlack5} alt="alt" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Activewear T-Shirt
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
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
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={TowerBlack6} alt="alt" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Activewear T-Shirt
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
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

     <div className="row" ><hr /> </div>
    
    <div className="row">
      <h3 className="header center storyTitle">AT&T Samsung Fashion Project</h3>
      <div className="col s12 m12 movement">
        <div className="col s6 m6 movement ">
          <img src={ATT} alt="alt" />
        </div>
        <div className="col s6 m6 movement  ">
          <img src={SAMSUNG} alt="alt" />
        </div>
        <div className="col s5 m5 movement center">
          <img src={ATT2} alt="alt" style={aStyle} />
        </div>
        <div className="col s7 m7 movement center">
          <p>Project Description </p>
        </div>
      </div>
    </div>
    <div className="row" ><hr /> </div>
    <div className="row">
      <h3 className="header center storyTitle">
        Eye on India Sew Sari Project
      </h3>
      <div className="col s12 m12 movement center">
        <p>Project Description: Explain the concept of Eye on India</p>
        <div className="col s4 m4 movement ">
          <img src={EOI1} alt="alt" />
        </div>
        <div className="col s4 m4 movement  ">
          <img src={EOI2} alt="alt" />
        </div>
        <div className="col s4 m4 movement center">
          <img src={EOI3} alt="alt" />
        </div>
        <div className="col s1 m1 movement center" />
        <div className="col s6 m6 movement center">
          <img src={EOI5} alt="alt" />
        </div>
        <div className="col s3 m3 movement center">
          <img src={EOI6} alt="alt" />
          {/* <div className="col s3 m3 movement center">
        
        </div> */}
        </div>
      </div>
    </div>
  </div>
);

export default Fashion;
