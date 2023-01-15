import React from "react";
import "./portfolio.scss";
import { useEffect, useState } from "react";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="item">
          <img src="" alt="placeholder"></img>
          <h3>App</h3>
        </div>
        <div className="item">
          <img src="" alt="placeholder"></img>
          <h3>App</h3>
        </div>
        <div className="item">
          <img src="" alt="placeholder"></img>
          <h3>App</h3>
        </div>
        <div className="item">
          <img src="" alt="placeholder"></img>
          <h3>App</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
