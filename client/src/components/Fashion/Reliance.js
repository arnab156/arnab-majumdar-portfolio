import React from "react";
// import { render } from "react-dom";
import DD1 from "./Images/Reliance/1.jpg";
import DD2 from "./Images/Reliance/1_1.jpg";
import DD3 from "./Images/Reliance/2.jpg";
import DD4 from "./Images/Reliance/3.jpg";
import DD5 from "./Images/Reliance/4.jpg";
import DD6 from "./Images/Reliance/5_1.jpg";
import DD7 from "./Images/Reliance/5_2.jpg";


const Reliance = () => (
    <div>
        <hr/>
        <div className="row">
            <h3 className="header center storyTitle">
                Reliance Trends Limited
            </h3>
            <p className="col s12 m12 center"> 
            Innovative marketing campaigns at Reliance Trends between 2008-10 aiming to democratize fashion for all Indians. Starting from 1st store I was involved in planning and 
            execution of opening of 4 brands (Performax, Forever18, Tee-Whiz & Pureza), 3 stores (Bangalore-2, Belgaum). Apart from that 
            I was involved in planning quarterly AOP, seasonal photoshoot, sale promotions, and media purchases. Reliance Trends has hundreds of stores across India. 
             </p>
            
            <div className="col s6 m6">
             <img className="image-width-100" src={DD2} alt="Reliance campaign daddy cool"/>
            </div>
            <div className="col s4 m4">
             <img className="image-width-100" src={DD1} alt="Reliance campaign daddy cool"/>
            </div>
        </div>

        <div className="row">
            <div className="col s1 m1"></div>
            <div className="col s3 m3">
             <img className="image-width-100" src={DD6} alt="Reliance campaign Tall Girls"/>
            </div>
            <div className="col s6 m6"> <img className="image-width-100" src={DD4} alt="Reliance campaign"/></div>
            <div className="col s3 m3">
             <img className="image-width-100" src={DD7} alt="Reliance campaign Tall Girls"/>
            </div>
            <div className="col s3 m3"> <img className="image-width-100" src={DD5} alt="Reliance campaign"/></div>
            <div className="col s12 m12">
             <img className="image-width-100" src={DD3} alt="Reliance campaign"/>
            </div>
        </div>
  
     
      
    </div>
   

);

export default Reliance;

