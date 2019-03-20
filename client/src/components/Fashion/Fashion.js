import React from "react";
import "./Fashion.css";

import project from "./Images/moc_2.jpg";
import project3 from "./Images/Project3_1.jpg";
import PurpleT from "./Images/Purple Line/T.jpg";
import PurpleTank from "./Images/Purple Line/Tank.jpg";
import PurpleWomens from "./Images/Purple Line/womens.jpg";
import TowerBlack1 from "./Images/Tower Black/1.jpg";
import TowerBlack2 from "./Images/Tower Black/2.jpg";
import TowerBlack3 from "./Images/Tower Black/3.jpg";
import TowerBlack4 from "./Images/Tower Black/4.jpg";
import TowerBlack5 from "./Images/Tower Black/5.jpg";
import TowerBlack6 from "./Images/Tower Black/6.jpg";
import TowerBlack7 from "./Images/Tower Black/7.jpg";
import TowerBlack8 from "./Images/Tower Black/8.jpg";
import TowerBlack9 from "./Images/Tower Black/9.jpg";
import PurpleShorts from "./Images/Purple Line/Shorts.jpg";
import ATT from "./Images/att.jpg";
import SAMSUNG from "./Images/Samsung2.jpg";
import ATT2 from "./Images/att1.jpg";

import EOI1 from "./Images/EOI/1.jpg";
import EOI2 from "./Images/EOI/2.jpg";
import EOI3 from "./Images/EOI/3.jpg";
import EOI4 from "./Images/EOI/6.jpg";
import EOI5 from "./Images/EOI/7.jpg";
import EOI6 from "./Images/EOI/8.jpg";
import EOI7 from "./Images/EOI/9.jpg";

import DoomsDay from "./DoomsDay";
import Reliance from "./Reliance";

const pStyle = {
  color: "rgb(133, 47, 214)"
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
            <strong><span className=" activator grey-text text-darken-4">
              Co-founder, Madeofchicago</span> </strong>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Click here to close.
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
            <strong><span className="activator grey-text text-darken-4">
              Hi-Tech Retail Experience
            </span></strong>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Quick Resources:
            </span>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=7buva0ungXo&feature=youtu.be"
                  title="Go to yt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Feature: BACP
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=X4f_J6u6izY&feature=youtu.be"
                  title="Made of Chicago"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video: Made of Chicago Story!
                </a>
              </li>
              <li>
                <a
                  href="http://www.windycitymediagroup.com/lgbt/Coming-to-a-vending-machine-near-you-Activewear/61310.html"
                  title="Windy City Times"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Feature: Windy City Times
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col s12 l12">
        <h3 className="header center storyTitle" style={pStyle}>
          {" "}
          Purple Line
        </h3>
        <div className="row">
          <div className="col s4 m4">
            <div className="card">
              <div className="card-image">
                <img className="" src={PurpleT} alt="Purple T Shirt" />
                <strong><center>T-Shirt</center></strong>
              </div>
              <div className="card-content">
                <p>
                  Inspired from the Could Gate, the Purple line imitates the
                  mercury like texture of the monument built by a person of
                  Indian origin.
                </p>
                <br /> 
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <div className="card">
              <div className="card-image">
                <img src={PurpleTank} alt="Purple Tank" />
                <strong><center>Active Tank</center></strong>
              </div>

              <div className="card-content">
                <p>
                  The Purple Line also takes inspiration from the curvilinear
                  form of the beloved “Chicago Bean.” This is one of the most
                  recognizable momuments in Chicago.
                </p>
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <div className="card">
              <div className="card-image">
             <strong>   <center>Sports Bra </center></strong>
                <img src={PurpleWomens} alt="Purple Womens" />
                <span className="card-content-2"></span>
              </div>
              <div className="card-content">
                <p>All Purple Lines are made with: <br/><br/>
                
                  Sweat Wicking Fabric <br/><br/>
                  4-way Stretch Fabric <br/><br/>
                  High Quality Flatlock Seaming <br/>
                   </p>
              </div>

              <div className="card-image">
                <img className="" src={PurpleShorts} alt="Purple Shorts" />
               <strong> <center>Shorts </center></strong> 
               <br/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col s12 l12 movement">
        <h3 className="header center storyTitle">Tower Black</h3>
        <p className="center">
          {" "}
          Click on each image to see more about the collection!
        </p>
        <div className="row">
          <div className="col s4 m4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator "
                  src={TowerBlack1}
                  alt="tower black sports brat"
                />
              </div>
              <div className="card-content">
                <strong><span className="activator grey-text text-darken-4">
                  Active Sports Bra
                </span></strong>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Click here to close
                </span>
                <img
                  className="activator"
                  src={TowerBlack8}
                  alt="womens bra back"
                />
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={TowerBlack2}
                  alt="alt"
                />
              </div>
              <div className="card-content">
                <strong><span className="activator grey-text text-darken-4">
                Active Flex Tights
                </span></strong>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Click here to close
                </span>
                <h5>
                  "..tower black collection is inspired by modern chicago
                  architecture & it's architects."
                </h5>
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator "
                  src={TowerBlack3}
                  alt="flex tank"
                />
              </div>
              <div className="card-content">
               <strong> <span className="activator grey-text text-darken-4">
                  Flex Active Tank
                </span></strong>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Click here to close
                </span>
                <img
                  className="activator "
                  src={TowerBlack7}
                  alt="blue mesh"
                />
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator "
                  src={TowerBlack4}
                  alt="alt"
                />
              </div>
              <div className="card-content">
              <strong><span className=" activator grey-text text-darken-4">
                  Active T-Shirt
                </span></strong>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Click here to close
                </span>
                <a
                  href="https://www.madeofchicago.com"
                  title="Made of Chicago website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit MadeofChicago.com
                </a>
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator "
                  src={TowerBlack5}
                  alt="alt"
                />
              </div>
              <div className="card-content">
              <strong><span className="activator grey-text text-darken-4">
                  Active Knit Shorts
                </span></strong>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Click here to close
                </span>
                <img
                  className="activator "
                  src={TowerBlack9}
                  alt="alt"
                />
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator "
                  src={TowerBlack6}
                  alt="alt"
                />
              </div>
              <div className="card-content">
              <strong><span className=" activator grey-text text-darken-4">
                  Active T-Shirt
                </span></strong>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Click here to close
                </span>

                <a
                  href="https://www.youtube.com/watch?v=4pIj63PCCcQ"
                  title="Made of Chicago Tower Black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video: Tower Black Inspiration!
                </a>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <hr />{" "}
    </div>

    <div className="row">
      <h3 className="header center storyTitle">AT&T Samsung Fashion Project</h3>
      
        <div className="col s5 m5  ">
          <img className="attLogo" src={ATT} alt="alt" />
        </div>
        <div className="col s7 m7   ">
          <img className="pixfix3" src={SAMSUNG} alt="alt" />
        </div>
        <div className="col s5 m5  center">
          <img className="pixfix4" src={ATT2} alt="alt" />
        </div>
        <div className="col s12 m12  center">
          <br />
          <br />
        
          <p>
            AT&T Samsung fashion & technology project was built to create a
            symbiotic interaction between use of technology, design pedagogy and
            corporate-academia interaction to shape America's future retailers
            and designers. I lead a team of 10 designers to create unique
            designs using Samsung Galaxy Note phones/technologies and the final
            designs were exhibited at AT&T's Michigan Avenue Flagship store for
            a month. Almost a million and a half people walk by the store that
            month.
          </p>
        </div>
      
    </div>
    <div className="row">
      <hr />{" "}
    </div>
    <div className="row">
      <h3 className="header center storyTitle">
        Eye on India Sew Sari Project
      </h3>
      
        <p className="col s1 m1" />
        <p className="col s10 m10 center">
          Eye on India Sari Project intended to create an interaction between
          fashion, photography, and sustainbality resulting in a net increase of
          audiences 100 times over past years at Eye on India event. This
          innovative art, fashion, and design project explores and redefines
          what it means to be an Indian and an American. This annual project
          focused on building inter-cultural interaction while increasing
          awareness of re-purposing and sustainability. This project has been
          exhibited at Bridgeport Art Center and also at Willis Tower.
        </p>
        <p className="col s1 m1" />

        <div className="col s3 m3 ">
          <img className= "EOIheight"  src={EOI1} alt="alt" />
        </div>
        <div className="col s3 m3  ">
          <img className= "EOIheight" src={EOI2} alt="alt" />
        </div>
        <div className="col s3 m3 ">
          <img className= "EOIheight" src={EOI3} alt="alt" />
        </div>
        <div className="col s3 m3 ">
          <img className= "EOIheight"  src={EOI4} alt="alt" />
        </div>
       
      
        <div className="col s6 m6 ">
          <img className= "EOIheight" src={EOI5} alt="alt" />
        </div>
        <div className="col s3 m3 ">
          <img className= "EOIheight" src={EOI6} alt="alt" />
        </div>
        <div className="col s3 m3 ">
          <img className= "EOIheight" src={EOI7} alt="alt" />
        </div>
        
      
    </div>


    <DoomsDay />
    <Reliance />
  </div>
);

export default Fashion;
