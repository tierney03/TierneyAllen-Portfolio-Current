import React from "react";
import "./intro.scss";
// import { init } from "ityped";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { useEffect, useRef } from "react";

function Intro() {
  // const textRef = useRef();
  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     typeSpeed: 500,
  //     strings: ["Full Stack Web Developer"],
  //   });
  // });
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="assets/Me.jpg"
            alt="woman in front of computer screen with code displayed"
          ></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I am</h2>
          <h1>Tierney Allen</h1>
          <h3>
            <span>Full Stack Web Developer</span>
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
