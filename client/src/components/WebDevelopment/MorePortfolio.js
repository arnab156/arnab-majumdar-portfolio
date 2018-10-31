import React from "react";
import "./wd.css";

const MoreWebProjects = () => (
  <div>
    <div className="row">
      <div className="col s1 m1"> </div>

      <div className="col s10 m10">
        <div className="card horizontal ">
          <div className="card-stacked">
            <div className="card-content">
              <h4 className="header text-color-main">Bamazon - A node app!</h4>
              <p>
                This app is created with Node.js, Inquirer NPM Package and MySQL
                database
              </p>
              <p>
                In this CRUD app you can:
                <ol>
                  <li>Shop for items</li>
                  <li>Manage Inventory </li>
                  <li> Manage Sales, Profit and Overhead Costs</li>
                </ol>
                To begin follow these steps and see the Video link below:
                <ol>
                  <li>Clone this repository</li>
                  <li>
                    Run command in Terminal (MAC) or Gitbash (WINDOWS) 'npm
                    install'{" "}
                  </li>
                  <li>
                    Run $ node bamazonCustomer.js or bamazonSupervisor.js or
                    bamazonManager.js
                  </li>
                  <li>Run 'ctrl + c' to exit the bamazon app.</li>
                </ol>
              </p>
            </div>
            <div className="card-action ">
              <a
                href="https://www.youtube.com/watch?v=cr4iUYp24Vo&feature=youtu.be"
                className="text-color-main"
                title="Go to Bamazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Video{" "}
              </a>

              <a
                href="https://github.com/arnab156/bamazon.git"
                className="text-color-main"
                title="Go to Bamazon Repo"
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

      <div className="col s6 m6">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <h4 className="header text-color-main">Tennis Giphy!</h4>

              <p>
                This app is for tennis enthusiasts!
                <ol>
                  <li>
                    Press any button with a player's name to see some popular
                    GIFs of them.
                  </li>
                  <li>
                    If your favorite player is not in the list of buttons
                    provided, you can also add them using the "add player pro
                    tennis player input". Try to use full names for better
                    results.{" "}
                  </li>
                  <li>
                    {" "}
                    Once the GIF's appear you can click on it to make the GIF
                    dynamic
                  </li>
                  <li>
                    You can also view the title as well as the ratings of the
                    GIF and can use the download button to download the GIF.
                  </li>
                </ol>
              </p>
            </div>
            <div className="card-action ">
              <a
                href="https://arnab156.github.io/GIPHY-API-AJAX/"
                className="text-color-main"
                title="Go to Giphy"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Deployed Website{" "}
              </a>

              <a
                href="https://github.com/arnab156/GIPHY-API-AJAX.git"
                className="text-color-main"
                title="Go to Giphy Repo"
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

      <div className="col s6 m6">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <h4 className="header text-color-main">Crytal Collector Game!</h4>

              <p>
                This game app was made using JavaScript. In this app:
                <ol>
                  <li>
                    You will be given a random number at the start of the game.
                    if you do not like the number, please refresh the page
                  </li>
                  <li>
                    There are four crystals. By clicking on each crystal you
                    will add a specific number of points to your total score.
                  </li>
                  <li>
                    You will win if your total score matches the random number
                    in the black box is the same. If your number exceeds, you
                    loose.
                  </li>
                  <li>
                    Value of the crystal is hidden from you until you click on
                    them. Refresh page to get a new number and crystal values.
                  </li>
                </ol>
              </p>
            </div>
            <div className="card-action ">
              <a
                href="https://arnab156.github.io/unit-4-game/"
                className="text-color-main"
                title="Go to Crystal Collector"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See Deployed Website{" "}
              </a>

              <a
                href="https://github.com/arnab156/unit-4-game.git"
                className="text-color-main"
                title="Go to Crystal Collector"
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
  </div>
);

export default MoreWebProjects;
