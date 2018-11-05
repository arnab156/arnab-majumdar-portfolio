import React from "react";
import "./Paint.css";
import paint1 from "./Image/Painting1.jpg";
import paint2 from "./Image/Painting2.jpg";
import chicago from "./Image/chicago.jpg";
import dhunochi from "./Image/dhunochi.jpg";
import dryflower from "./Image/dryflower.jpg";
import flowercard from "./Image/flowercard.jpg";
import tigerlily from "./Image/tigerlily.jpg";
import loveislove from "./Image/loveislove.jpg";
import soxchi from "./Image/soxchi.jpg";

export const Paint = () => (
  <div classname = "flex-container">
    <div className="row">
      <div className="col s4 m4">
        <div className="card">
          <div className="card-image">
            <img src={paint1} alt="painting1" />
            <strong><center><span>Nephew</span></center></strong>
          </div>
          <div className="card-content">
            <p>
              
            </p>
          </div>
        </div>
      </div>

      <div className="col s4 m4">
        <div className="card">
          <div className="card-image">
            <img src={dryflower} alt="dryflower" />
            <strong><center><span>Alive</span></center></strong>
          </div>
          <div className="card-content">
            <p>
            </p>
          </div>
        </div>
      </div>

      <div className="col s4 m4">
        <div className="card">
          <div className="card-image">
            <img src={paint2} alt="painting2" />
            <strong><center><span>Wah Taj!</span></center></strong>
          </div>
          <div className="card-content">
            <p>
              
            </p>
          </div>
        </div>
      </div>

      <div className="col s4 m4">
        <div className="card">
          <div className="card-image">
            <img src={chicago} alt="chicago" />
            <strong><center><span>Chicago</span></center></strong>
          </div>
          <div className="card-content">
            <p>
              
            </p>
          </div>
        </div>
      </div>
      
      <div className="col s4 m4">
        <div className="card">
          <div className="card-image">
            <img src={dhunochi} alt="dhunochi" />
            <strong><center><span>Victorious</span></center></strong>
          </div>
          <div className="card-content">
            <p>
              
            </p>
          </div>
        </div>
      </div>



      <div className="col s4 m4">
        <div className="card">
          <div className="card-image">
            <img src={flowercard} alt="flowercard" />
            <strong><center><span>Flower</span></center></strong>
          </div>
          <div className="card-content">
            <p>
              
            </p>
          </div>
        </div>
      </div>

      <div className="col s4 m4">
        <div className="card">
          <div className="card-image">
            <img src={loveislove} alt="LoveisLove" />
            <strong><center><span>LoveisLove</span></center></strong>
          </div>
          <div className="card-content">
            <p>
              
            </p>
          </div>
        </div>
      </div>

      <div className="col s4 m4">
        <div className="card">
          <div className="card-image">
            <img src={soxchi} alt="soxchi" />
            <strong><center><span>Mexico City</span></center></strong>
          </div>
          <div className="card-content">
            <p>
              {/* I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively. */}
            </p>
          </div>
        </div>
      </div>

      <div className="col s4 m4">
        <div className="card">
          <div className="card-image">
            <img src={tigerlily} alt="tigerlily" />
            <strong><center><span>Tigerlily</span></center></strong>
          </div>
          <div className="card-content">
            <p>
              {/* I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Paint;
