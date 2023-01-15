import React from "react";
import "./portfolio.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="item">
          <a href="https://tierney03.github.io/OneStop/" target="_onblank">
            <img src="assets/OneStop.png" alt="screenshot of webpage"></img>
          </a>
          <h3>OneStop</h3>
        </div>
        <div className="item">
          <a
            href="https://evening-stream-22967.herokuapp.com/"
            target="_onblank"
          >
            <img src="assets/GoalE.png" alt="screenshot of webpage"></img>
          </a>
          <h3>Goal-E</h3>
        </div>
        <div className="item">
          <a
            href="https://github.com/tierney03/EmployeeTracker_SQL"
            target="_onblank"
          >
            <img src="assets/SQL.png" alt="screenshot of web recording"></img>
          </a>
          <h3>Employee Tracker</h3>
        </div>
        <div className="item">
          <a href="https://github.com/tierney03" target="_onblank">
            <img src="assets/Github.png" alt="screenshot of webpage"></img>
          </a>
          <h3>Github</h3>
        </div>
      </div>
      <a href="#works">
        <KeyboardArrowDownIcon className="arrow" />
      </a>
    </div>
  );
}

export default Portfolio;
