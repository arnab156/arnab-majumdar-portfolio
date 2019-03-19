import React from "react";
import "./wd.css";
import Card from "../Card/card";
import { Link, Route } from "react-router-dom";
import MorePortfolio from "./MorePortfolio";
import github from "../FlipCart/github.png";

const WebProjects = () => (
  <div>
    <div className="row">
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
              <br/>
              <p className="center"> Customer Log in credentials: username: <strong>q@q.com</strong> and password: <strong>q</strong></p>
              <p className="center"> Front-Desk Log in credentials: username: <strong>arnab</strong> and password: <strong>1</strong></p>
              <p className="center"> Front-Desk Log in credentials: username: <strong>arnab</strong> and password: <strong>2</strong></p>

              <p className="center">
                <br /> <strong>Technologies used:</strong>
                <br /> Passport Authentication
                <br /> HTML, CSS
                <br /> Express, Sequelize and MySQL.
                <br />
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
 {/* END OF ADAM FRONT DESK */}

{/* START OF BOOKBUZZ */}

<div className="col s12 l12 movement">
        <div className="card horizontal ">
          <div className="card-stacked">
            <div className="card-content">
              <h3 className="header storyTitle center">BookBuzz</h3>
              <p>
              BookBuzz is an application created for users to find new books to read, save for later, create book clubs and join clubs based on their reading interests. It is a fun interactive app for users to connect with others who share the same interest in books. The inspiration behind this app was to create a platform for book lovers to come together and connect.
              </p>
              <br/>
              <p className="center"> Customer Log in credentials: username: <strong>a@a.com</strong> and password: <strong>BookBuzz1!</strong></p>
              
              <p className="center">
                <br /> <strong>Technologies used:</strong>
                <br /> AuthO Authentication
                <br /> MERN Stack
                <br /> Mongo, Express, React and Node.
                <br />
              </p>
            </div>
            <div className="card-action">
              <a
                href="https://bookbuzz25.herokuapp.com/"
                className="text-color-main"
                title="Go to BookBuzz"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Deployed Website{" "}
              </a>

              <a
                href="https://github.com/arnab156/Bookbuzz"
                className="text-color-main"
                title="Go to BookBuzz"
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

{/* END OF BOOKBUZZ */}




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
                <br />
                <strong>In this CRUD app you can: </strong>
                <br />
                1. Check SilverLine train schedule.
                <br />
                2. Add a train line and schedule. Please enter train frequency
                in minutes only.
                <br />
                3. You can update (name, train number, frequency) and even
                delete the train schedule.
                <br />
                4. Trains arriving in 4 mins or less will highlight in the
                schedule.
                <br />
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
                <br />
                In this app you can:
                <br />
                1. Create/Order your own burger
                <br />
                2. Press Devour button to eat it up.
                <br />
                3. Press un-Devour button to un-eat it.
                <br />
                4. Press Delete button to delete the burger from the list.
                <br />
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
        allowFullScreen
      />
      <iframe
        className="frameStyle"
        title="project3"
        src="https://arnab-burger.herokuapp.com/"
        allowFullScreen
      />
      <br /> <br />
      <hr />
      <br />

    </div>
{/* REACT APPS */}
{/* ONE */}
    <div className="row">
      <div className="col s4 m4 center pStyle" >
        <br /> <br />
        <div className="card-action">
          <div class="btn1">
            <a
              href="https://arnab156.github.io/my-game/ "
              title="Go to Clicky Game!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="white-text">See Website</span>
            </a>

            <div class="dot" />
          </div>
          <a
            href="https://github.com/arnab156/my-game.git"
            title="Go to Click game!"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Github
          </a>{" "}
          <br />
         
          <h6> Clicky React Game</h6>
        </div>
      </div>

{/* TWO SECOND CITY TENNIS */}
            <div className="col s4 m4 qStyle center" >
      <br /> <br />
      <div className="card-action">  
      <div class="btn1">
            <a
              href="http://secondcitytennis.herokuapp.com/"
              title="Go to Second City Tennis!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="white-text">See Website</span>
            </a>

            <div class="dot" />
          </div>
          <a
            href="https://github.com/arnab156/secondCityTennis.git"
            title="Go to Second City Tennis!"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Github
          </a>{" "}
          <br />
         
          <h6 className="white-text"> Second City Tennis</h6>

          </div>
      </div>

{/* END OF SECOND CITY TENNIS */}

{/* THREE */}
      <div className="col s4 m4 center rStyle" >
        
        <br /><br/>
        <div className="card-action">
          <div class="btn1">
            <a
              href="https://dry-basin-84655.herokuapp.com/"
              title="Go to Nyt scraper!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="white-text">See Website</span>
            </a>
            <div class="dot" />
          </div>

          <a
            href="https://github.com/arnab156/reactNYTscraper.git"
            title="Go to Nyt scraper!"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            See Github{" "}
          </a>
          <br/>   
          <h6 className="white-text"> New York Times & Mongodb Scraper</h6>
        </div>
      </div>
{/* //ROW 2 */}   
{/* JAMES STEWART DIV */}
      <div className="col s4 m4 qStyle center" >
      <br /> <br />
      <div className="card-action">  
      <div class="btn1">
            <a
              href="http://www.james-stewart.us/"
              title="Go to James Stewart!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="white-text">See Website</span>
            </a>

            <div class="dot" />
          </div>
          <a
            href="https://github.com/arnab156/jamesstewart.git"
            title="Go to James Stewart!"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Github
          </a>{" "}
          <br />
         
          <h6 className="white-text"> James Stewart CV Website</h6>

          </div>
      </div>
{/* END OF JAMES STEWART DIV */}


{/* FIVE */}
    <div className="col s4 m4 center rStyle">
    
    <h4 className="center white-text"> REACT APPS</h4>
    <h6 className="white-text">See many more projects on my Github</h6>
    <a
              href="https://github.com/arnab156/"
              title="Go to instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github Link" className="thumbnail" />
            </a>
            <br />
    
    
    </div>
{/* end of FIVE   */}
  
{/* SIX - MADE OF CHICAGO   */}
    <div className="col s4 m4 center pStyle">
    <br /> <br />
      <div className="card-action">  
      <div class="btn1">
            <a
              href="http://madeofchicago.herokuapp.com/"

              title="Go to Made of Chicago!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="white-text">See Website</span>
            </a>

            <div class="dot" />
          </div>
          <a
            href="https://github.com/arnab156/MadeOfChicago.git"
            title="Go to Made of Chicago!"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Github
          </a>{" "}
          <br />
         
          <h6 className="white-text"> Made Of Chicago Website</h6>

          </div>
    
    
    </div>
{/* end of MADE OF CHICAGO/ */}

    </div>
{/* END OF REACT APP */}


    <div className="row">
      <div className="col s12 m6 movement">
        <div className="card ">
          <div className="card-content">
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

          <div className=" card-action">
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
          allowFullScreen
        />
      </div>
    </div>

    <div className="row">
      <div className="col s6 m6 ">
        <iframe
          className="frameStyle2"
          title="projectguess"
          src="https://arnab156.github.io/TriviaGame/"
          allowFullScreen
        />
      </div>

      <div className="col s12 m6 movement">
        <div className="card ">
          <div className="card-content">
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

          <div className=" card-action">
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

              <p className="center">
                <br />
                <strong>Technologies used: </strong>
                <br /> Google Maps API, iTunes API, Food2Fork API, Weather Map
                API, Youtube API
                <br />
                Materialize
                <br />
                Javascript, Firebase.
                <br />
              </p>
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
      <Route
        exact
        path={`/portfolio/webdevelopment/more`}
        component={MorePortfolio}
      />
    </Card>
  </div>
);

export default WebProjects;
