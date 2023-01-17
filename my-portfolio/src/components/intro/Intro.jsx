import React from "react";
import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Me from "../assets/Me.jpg";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src={Me}
            alt="woman in front of computer screen with code displayed"
          ></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I am</h2>
          <h1>Tierney Allen</h1>
          <h3>
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Full Stack Web Developer")

                  .pauseFor(400)
                  .deleteAll()
                  .typeString("Full Stack Web Developer")
                  .start();
              }}
            />
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="arrow" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
