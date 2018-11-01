import React from "react";
import "./wd.css";
import reactLogo from "./Images/reactlogo.png";
import Card from "../Card/card";
import { Link, Route } from "react-router-dom";
import MorePortfolio from "./MorePortfolio";

const pStyle = {
  background: "#B22222",
  height: "200px",
  color: "white"
};
const qStyle = {
  background: "#FF8C00",
  font: "Faster One",
  height: "200px"
};
const rStyle = {
  background: "#FFD700",
  height: "200px"
};

const WebProjects = () => (
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

              <a
                href="https://github.com/arnab156/Firebase-trainSchedule-SilverLine.git"
                className="text-color-main"
                title="Go to Firebase"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Github{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m5 movement">
        <div className="card horizontal ">
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
                  <li>
                    Press Delete button to delete the burger from the list.
                  </li>
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
              <a
                href="https://github.com/arnab156/burger.git"
                className="text-color-main"
                title="Go to Firebase"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Github{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <iframe
        className="frameStyle"
        title="project1"
        src="https://arnab156.github.io/Firebase-trainSchedule-SilverLine/"
        allowfullscreen
      />
      <iframe
        className="frameStyle"
        title="project3"
        src="https://arnab-burger.herokuapp.com/"
        allowfullscreen
      />
      <br /> <br />
      <hr />
      <br />
      <div className="col s12 l12 movement">
        <div className="card horizontal ">
          <div className="card-stacked">
            <div className="card-content">
              <h3 className="header storyTitle center">ADAM Front-Desk</h3>
              <p>
                ADAM-Desk (Arnab,Don,Andrei,Maryia) is a front-desk application
                that enables efficient communication between customers,
                front-desk staff, and service providers. This application can be
                used in not just an office but also at managing front desks at
                academia, hair salons, spa, restaurant and what not!
              </p>

              <ul className="center">
                <h6> Technologies used:</h6>
                <li> Passport Authentication</li>
                <li> HTML, CSS </li>
                <li> Express, Sequelize and MySQL.</li>
              </ul>
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

              <a
                href="https://github.com/arnab156/Project-2.git"
                className="text-color-main"
                title="Go to ADAM Front-Desk!"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Github{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col s4 m4 center" style={pStyle}>
        <br />
        <br />
        <h6> Clicky React Game</h6>
        <div className="card-action">
          <a
            href="https://arnab156.github.io/my-game/ "
            // className="text-color-main"
            title="Go to Clicky Game!"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            See Deployed Website{" "}
          </a>
          <br />
          <a
            href="https://github.com/arnab156/my-game.git"
            // className="text-color-main"
            title="Go to Click game!"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            See Github{" "}
          </a>
        </div>
      </div>

      <div className="col s4 m4" style={qStyle}>
        <img
          src={reactLogo}
          alt="React Apps"
          className="reactLogoStyle"
          // style={{ width: "50%", height: "50%", margin: "15% 0% 0% 25%" }}
        />
      </div>
      <div className="col s4 m4 center" style={rStyle}>
        <br />
        <br />
        <h6> New York Times & Mongodb Scraper</h6>
        <div className="card-action">
          <a
            href="https://dry-basin-84655.herokuapp.com/"
            // className="text-color-main"
            title="Go to Nyt scraper!"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            See Deployed Website{" "}
          </a>
          <br />
          <a
            href="https://github.com/arnab156/reactNYTscraper.git"
            // className="text-color-main"
            title="Go to Nyt scraper!"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            See Github{" "}
          </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col s12 m6 movement">
        <div class="card ">
          <div class="card-content">
            <h5 className="header text-color-main"> Word Guessing Game</h5>
            <p>This a fun game built with Javascript, HTML and CSS.</p>
            <br />
            <p>
              Go to the website experience the game or you may also play around
              with the virtual window to the right. See Github for more details.
              Start with pressing the red button and read the instruction on the
              page.
            </p>
          </div>

          <div class=" card-action">
            <a
              href="https://arnab156.github.io/wordGuessGame/"
              className="text-color-main"
              title="Go to ADAM Front-Desk!"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              See Deployed Website{" "}
            </a>

            <a
              href="https://github.com/arnab156/wordGuessGame.git"
              className="text-color-main"
              title="Go to ADAM Front-Desk!"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              See Github{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="col s6 m6 ">
        <iframe
          className="frameStyle2"
          title="projectguesscity"
          src="https://arnab156.github.io/wordGuessGame/"
          allowfullscreen
        />
      </div>
    </div>

    <div className="row">
      <div className="col s6 m6 ">
        <iframe
          className="frameStyle2"
          title="projectguess"
          src="https://arnab156.github.io/TriviaGame/"
          allowfullscreen
        />
      </div>

      <div className="col s12 m6 movement">
        <div class="card ">
          <div class="card-content">
            <h5 className="header text-color-main"> Trivia Game</h5>
            <p>
              This a fun game built with Javascript, Bootstrap and Momentjs.
            </p>
            <br />
            <p>
              For the best experience use the link below to go to the website or
              you may also play around with the virtual window to the left. See
              Github for more details.
            </p>
            <br />
          </div>

          <div class=" card-action">
            <a
              href="https://arnab156.github.io/TriviaGame/"
              className="text-color-main"
              title="Go to ADAM Front-Desk!"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              See Deployed Website{" "}
            </a>

            <a
              href="https://github.com/arnab156/TriviaGame.git"
              className="text-color-main"
              title="Go to ADAM Front-Desk!"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              See Github{" "}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col s12 l12 movement">
        <div className="card horizontal ">
          <div className="card-stacked">
            <div className="card-content">
              <h3 className="header storyTitle center">Gym Rat</h3>
              <p className="center">
                Gym Rat is a collaborative project and is a one stop shop for
                all of your gym needs and motivates the users to live a healthy
                lifestyle.
              </p>

              <ul className="center">
                <h6> Technologies used:</h6>
                <li> Google Maps API, iTunes API, Food2Fork API, Weather Map API, Youtube API</li>
                <li> Materialize </li>
                <li> Javascript, Firebase.</li>
              </ul>
            </div>
            <div className="card-action">
              <p>
                {" "}
                For best performance please use Google Chrome and download any
                CORS extension!
              </p>
              <a
                href="https://arnab156.github.io/gymRat/"
                className="text-color-main"
                title="Go to Gym Rat!"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Deployed Website{" "}
              </a>

              <a
                href="https://github.com/arnab156/gymRat.git"
                className="text-color-main"
                title="Go to Gym Rat Repo!"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Github{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Card title="See More Portfolio">
          <Link
            to={`/portfolio/webdevelopment/more`}
            role="button"
            className="btn btn-red-color"
          >
            See More
          </Link>{" "}
          <Link
            to="/portfolio/webdevelopment"
            role="button"
            className="waves-effect waves-teal btn-flat"
          >
            Less
          </Link>
          <Route exact path={`/portfolio/webdevelopment/more`} component={MorePortfolio} />
        </Card>
  </div>
);

export default WebProjects;
