import React from "react";
import "./topbar.scss";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Tierney
          </a>
          <div className="itemContainer">
            <a href="https://github.com/tierney03/" target="_onblank">
              <GitHubIcon className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/tierney-allen/"
              target="_onblank"
            >
              <LinkedInIcon className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a href="mailto:tierney_03@mac.com">
              <MailIcon className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
