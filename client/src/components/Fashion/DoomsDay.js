import React from "react";
// import { render } from "react-dom";
import DD1 from "./Images/Doomsday/1.jpg";
import DD2 from "./Images/Doomsday/2.jpg";
import DD3 from "./Images/Doomsday/3.jpg";
import DD4 from "./Images/Doomsday/4.jpg";
import DD5 from "./Images/Doomsday/5.jpg";
import DD6 from "./Images/Doomsday/6.jpg";
import DD7 from "./Images/Doomsday/7.jpg";


const DoomsDay = () => (
    <div>
        <hr/>
        <div className="row">
            <h3 className="header center storyTitle">
                DOOMSDAY SALE CAMPAIGN
            </h3>
            <p className="col s10 m10 center"> Inspired by current events of that time a sale campaign was created that generated higher website visits and improved sales in the Holiday Season of 2017.</p>
            <div className="col s4 m4">
             <img src={DD2} alt="doomsday campaign"/>
            </div>
            <div className="col s4 m4">
             <img src={DD1} alt="doomsday campaign"/>
            </div>
            <div className="col s4 m4">
             <img src={DD6} alt="doomsday campaign"/>
            </div>
            <div className="col s1 m1"></div>
            <div className="col s5 m5">
             <img src={DD4} alt="doomsday campaign"/>
            </div>
            <div className="col s5 m5">
             <img src={DD3} alt="doomsday campaign"/>
            </div>
            <div className="col s1 m1"></div>

            <div className="col s5 m5">
             <img src={DD5} alt="doomsday campaign"/>
            </div>
            <div className="col s5 m5">
             <img src={DD7} alt="doomsday campaign"/>
            </div>
            <div className="col s2 m2"></div>

        </div>
     
      
    </div>
   

);

export default DoomsDay;

