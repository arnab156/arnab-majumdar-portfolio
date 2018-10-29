import React from "react";
import "./wd.css";

export const WebProjects = () => (
  <div>
    <div className="row">
      <div className="col s12 m7 movement">
        <div className="card horizontal ">
          <div className="card-stacked">
            <div className="card-content">
              <h3 className="header text-color-main">
                Silver Line Train Schedule
              </h3>
              <p>
                This app is created with Firebase, HTML, CSS, Moments and jQuery
              </p>
              <p>
                {" "}
                In this CRUD app you can:
                <ol>
                  <li>Check SilverLine train schedule.</li>
                  <li>
                    Add Train line and schedule. Please enter train frequency in
                    minutes only.
                  </li>
                  <li>
                    You can update (name, trtainnumber, frequency) and even
                    delete the train schedule.
                  </li>
                  <li>
                    Trains arriving in 4 mins or less will highlight in the
                    schedule.
                  </li>
                </ol>
              </p>
            </div>
            <div className="card-action ">
              <a
                href="https://arnab156.github.io/Firebase-trainSchedule-SilverLine/"
                className="text-color-main"
                title="Go to Firebase"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Deployed Website{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col s12 m5 movement">
        {/* <h2 className="header">Horizontal Card</h2> */}
        <div className="card horizontal ">
          {/* <div className="card-image">
            <img
              src="https://lorempixel.com/100/190/nature/6"
              alt="nothing to show"
            />
          </div> */}
          <div className="card-stacked">
            <div className="card-content">
              <h3 className="header text-color-main">Eat-dé-burger</h3>
              <p>
                {" "}
                This app is created with MySQL, Node, Express, Handlebars & a
                homemade ORM (yum!).
              </p>
              
              <p>
                {" "}
                In this app you can:
                <ol>
                  <li>Create/Order your own burger</li>
                  <li>Press Devour button to eat it up.</li>
                  <li>Press un-Devour button to un-eat it.</li>
                  <li>Press Delete button to delete the burger from the list.</li>
                </ol>
              </p>
            </div>
            <div className="card-action">
              <a
                href="https://arnab-burger.herokuapp.com/"
                className="text-color-main"
                title="Go to Burgers!"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Deployed Website{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

       <iframe className = "frameStyle" title = "project1"  src="https://arnab156.github.io/Firebase-trainSchedule-SilverLine/" allowfullscreen></iframe>
       <iframe className = "frameStyle" title = "project3"  src="https://arnab-burger.herokuapp.com/" allowfullscreen></iframe>

      <div className="col s12 l12 movement">
        <div className="card horizontal ">
          <div className="card-stacked">
            <div className="card-content">
              <h3 className="header">ADAM Front-Desk</h3>
              <p>
                ADAM-Desk (Arnab,Don,Andrei,Maryia) is a front-desk application
                that enables efficient communication between customers,
                front-desk staff, and service providers. This application can be
                used in not just an office but also at managing front desks at
                academia, hair salons, spa, restaurant and what not!
              </p>
             
            </div>
            <div className="card-action">
            <a
                href="https://adamfrontdesk.herokuapp.com/"
                className="text-color-main"
                title="Go to ADAM Front-Desk!"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Deployed Website{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col s12 m6 movement">
        <div class="card ">
          <div class="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>

          <div class="card-content grey lighten-4">
            <p> more details</p>
          </div>
        </div>
      </div>

      <div className="col s12 m6 movement">
        <div class="card ">
          <div class="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>

          <div class="card-content grey lighten-4">
            <p> more details</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WebProjects;
